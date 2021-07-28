import { ICarsRepository, ICreateDTO } from "../ICarsRepository";

interface Car {
  veiculo: string;
  ano: Number,
  descricao: string;
  marca: string;
  vendido: Boolean; 
  created: Date;
}

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({ ano, descricao, veiculo, marca, vendido }: ICreateDTO): Promise<any> {
    const car = {
      veiculo,
      ano,
      descricao,
      marca,
      vendido,
      created: new Date()
    }

    this.cars.push(car);

    return car;
  }

  async list(): Promise<any[]> {
    return this.cars;
  }

  async find(q: string): Promise<any> {
    return this.cars.filter(car => car.veiculo.includes(q))
  }

}

export { CarsRepositoryInMemory };