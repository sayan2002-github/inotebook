import {connectToDB} from './dbConnection.js';
import dotenv from 'dotenv';
import express from 'express'
import { authRoute } from './routes/auth.js';
import { notesRoute } from './routes/notes.js';

dotenv.config();

const app = express()

// Middleware added to handle JSON files
app.use(express.json());

// Connection to database
connectToDB();

app.use('/api/auth', authRoute)
app.use('/api/notes', notesRoute)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})