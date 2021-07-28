import express from 'express'
import cors from 'cors'

import CarController from './controllers/CarController';

import './database'

const app = express();

app.use(cors())
app.use(express.json());

app.post("/veiculos", CarController.create)

app.get("/veiculos", CarController.list)

app.get("/veiculos/find", CarController.find)

app.listen(3333, () => {
  console.log("Server is running!");
})

