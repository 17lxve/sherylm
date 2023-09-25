import express from 'express'
import cors from 'cors'
import { router } from './router'
import mongoose from 'mongoose'

const app = express()
app.use(cors())

mongoose
  .connect('mongodb://127.0.0.1:27017/sherylm')
  .then(() => console.log('Database Connected! '))
  .catch((err) => console.log(err))

app.use('/', router)

app.listen(3000, () => console.log('App listening'))
