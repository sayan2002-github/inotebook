import express from "express";
import { Users } from "../models/Users.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/",
  [
    body("name", "Enter a valid name!").isLength({ min: 3 }),
    body("email", "Enter a valid mail!").isEmail(),
    body("password", "Passowrd should be atleast 5 characters long!").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // Check whether the data is valid or not
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }

    // Check whether the user already exists or not
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "User already exists!!" });
    }

    user = await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.send(user);
  }
);

export const authRoute = router;
