import express from "express";
import { User } from "../models/Users.js";
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
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
      }

      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.send(user);
    } catch (error) {
      res.send({ error: "Email already exists !!" });
    }
  }
);

export const authRoute = router;
