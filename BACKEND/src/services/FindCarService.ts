import { ICarsRepository } from "../repositories/ICarsRepository";

class FindCarService {
  constructor(private carsRepository: ICarsRepository) {}

  async execute(q: string) {
    const car = await this.carsRepository.find(q);

    return car;
  }
}

export { FindCarService };