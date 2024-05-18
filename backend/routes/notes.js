import express from 'express'
import { Notes } from '../models/Notes.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/', [
    body('title', 'Title should be atleast 3 characters long!').isLength({min: 3}),
    body('description', 'Description should be atleast 3 characters long!').isLength({min: 3}),
], async(req, res)=>{
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
          return res.send({ errors: result.array() });
        }
  
        const note = await Notes.create({
          title: req.body.title,
          description: req.body.description,
          tags: req.body.tags,
        });
        
        res.send(note);
      } catch (error) {
          console.log(error);
      }
})

export const notesRoute = router;