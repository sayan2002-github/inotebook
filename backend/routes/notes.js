import express from "express";
import { Notes } from "../models/Notes.js";
import { body, validationResult } from "express-validator";
import { getUser } from "../middleware/getuser.js";

const router = express.Router();

// Route1 : Add new note using POST request on /api/notes/add-note
router.post(
  "/add-note",
  getUser,
  [
    body("title", "Title should be atleast 3 characters long!").isLength({
      min: 3,
    }),
    body(
      "description",
      "Description should be atleast 3 characters long!"
    ).isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      // Check whether the data is valid or not
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
      }

      const note = await Notes.create({
        userId: req.user.id,
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
      });

      res.send(note);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
);

// Route2 : Fetch all notes using GET request on /api/notes/fetch-notes
router.get("/fetch-notes", getUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const notes = await Notes.find({ userId });
    if (!notes) {
      return res
        .status(401)
        .json({ message: "Sorry! No notes have been found" });
    }

    res.send(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

// Route3 : Update note using PUT request on /api/notes/update-note
router.put("/update-note/:id", getUser, async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const newNote = {};

    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tags) {
      newNote.tags = tags;
    }

    // Validate the particular note
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(401).send("Note not found!");
    }

    // Validate the user
    if (note.userId.toString() !== req.user.id) {
      return res.status(404).send("User not found!");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );

    res.send({ note });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

// Route4 : Delete note using DELETE request on /api/notes/delete-note
router.delete("/delete-note/:id", getUser, async (req, res) => {
  try {
    // Validate the particular note
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(401).send("Note not found!");
    }

    // Validate the user
    if (note.userId.toString() !== req.user.id) {
      return res.status(404).send("User not found!");
    }

    note = await Notes.findByIdAndDelete(req.params.id);

    res.send({ message: "Note deleted successfully!", note });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

export const notesRoute = router;
