import {connectToDB} from './dbConnection.js';
import dotenv from 'dotenv';
import express from 'express'

dotenv.config();

const app = express()

app.get('/', (req, res) => {
  res.send('iNotebook Backend setup successful!!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

connectToDB();