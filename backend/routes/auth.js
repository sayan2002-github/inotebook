import express from "express";
import { Users } from "../models/Users.js";
import { body, validationResult } from "express-validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getUser } from "../middleware/getuser.js";

const router = express.Router();


// Route1: Create an user using POST request on /api/user/create-user : No login required
router.post(
  "/create-user",
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
    try {
      let user = await Users.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "User already exists!!" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

      user = await Users.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });

      const payload = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(payload, process.env.JWT_SECRET);

      res.send({authToken});
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal serevr error.." });
    }
  }
);


// Route2: Logged in an user using POST request on /api/user/login : No login required
router.post("/login", [
  body("email", "Enter a valid email!").isEmail(),
  body("password", "Enter a valid passowrd").exists(),
], async(req, res)=>{
    // Check whether the data is valid or not
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }

    try {
      const user = await Users.findOne({email: req.body.email});
      if(!user){
        return res.status(400).json({error: "Please, login with correct credentials!"});
      }
  
      const passowrd = await bcrypt.compare(req.body.password, user.password);
      if(!passowrd){
        return res.status(400).json({error: "Please, login with correct credentials!"});
      }

      const payload = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(payload, process.env.JWT_SECRET);

      res.send({message: "Logged in successfully!", authToken});
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal serevr error.." });
    }
})

// Route3: Get user data using POST request on /api/auth/getuser : Login required
router.post("/getuser", getUser, async(req, res)=>{
  try {
    const userId = req.userId;
    const user = await Users.findById(userId);
  
    res.send(user);
  } catch (error) {
    res.status(400).json({error: "Internal serever error"});
  }
})

export const authRoute = router;