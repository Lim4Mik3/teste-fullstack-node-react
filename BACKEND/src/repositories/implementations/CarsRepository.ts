import { Car } from '../../model/Cars'
import { ICarsRepository, ICreateDTO } from "../ICarsRepository";

class CarsRepository implements ICarsRepository {
  async create({ veiculo, ano, descricao, marca, vendido }: ICreateDTO): Promise<any> {
    const car = await Car.create({ veiculo, ano, descricao, marca, vendido })

    return car;
  }

  async list(): Promise<any[]> {
    const cars = await Car.find();

    return cars;
  }

  async find(q: string): Promise<any> {
    const cars = await Car.find({ veiculo: {$regex: q, $options: 'i'} });

    return cars;
  }

}

export { CarsRepository };