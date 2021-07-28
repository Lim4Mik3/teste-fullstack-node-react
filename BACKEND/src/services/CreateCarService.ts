import { ICarsRepository } from "../repositories/ICarsRepository";

interface IRequest {
  veiculo: string;
  ano: Number,
  descricao: string;
  marca: string;
  vendido: Boolean; 
}

class CreateCarService {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({ veiculo, ano, descricao, marca, vendido }: IRequest): Promise<any> {
    const car = await this.carsRepository.create({ veiculo, ano, descricao, marca, vendido });

    return car;
  }

}

export { CreateCarService }