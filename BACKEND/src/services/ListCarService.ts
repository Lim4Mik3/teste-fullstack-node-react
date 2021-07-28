import { ICarsRepository } from "../repositories/ICarsRepository";

class ListCarService {
  constructor(private carsRepository: ICarsRepository) {}

  async execute() {
    const all = await this.carsRepository.list();

    return all;
  }
}

export { ListCarService };