import { CarsRepository } from "../repositories/implementations/CarsRepository";
import { CreateCarService } from "./CreateCarService";
import { FindCarService } from "./FindCarService";
import { ListCarService } from "./ListCarService";

const carsRepository = new CarsRepository();

const createCarService = new CreateCarService(carsRepository);
const findCarService = new FindCarService(carsRepository);
const listCarService = new ListCarService(carsRepository);

export { createCarService, findCarService, listCarService };