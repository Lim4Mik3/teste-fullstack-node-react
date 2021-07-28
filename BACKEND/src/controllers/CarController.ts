import { Request, Response } from "express";
import { createCarService, findCarService, listCarService } from "../services";

export default {
  async create(request: Request, response: Response) {
    const { veiculo, ano, descricao, marca, vendido } = request.body;

    const car = await createCarService.execute({ veiculo, ano, descricao, marca, vendido })    
    
    return response.status(201).json(car);

  },

  async list(request: Request, response: Response) {
    const cars = await listCarService.execute();

    return response.status(200).json(cars);
  },

  async find(request: Request, response: Response) {
    const { q  } = request.query;

    const car = await findCarService.execute(String(q));

    return response.status(200).json(car);
  }

}