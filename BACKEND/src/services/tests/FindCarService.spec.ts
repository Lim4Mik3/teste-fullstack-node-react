import { CarsRepositoryInMemory } from "../../repositories/implementations/CarsRepositoryInMemory";
import { CreateCarService } from "../CreateCarService";
import { FindCarService } from "../FindCarService";

let createCarService: CreateCarService;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let findCarService: FindCarService;


describe("Serviço de buscar de um determinado carro", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarService = new CreateCarService(carsRepositoryInMemory);
    findCarService = new FindCarService(carsRepositoryInMemory);
  })

  it("Deve ser possivel encontrar um carro pelas iniciais do seu nome", async () => {
    const car = {
      veiculo: "Strada",
      ano: 2009,
      descricao: "Carro de trabalho",
      marca: "Fiat",
      vendido: false
    }

    const car2 = {
      veiculo: "Honda Civic",
      ano: 2014,
      descricao: "Carro Sedan",
      marca: "Honda",
      vendido: false
    }

    await createCarService.execute(car)
    const createdCar2 = await createCarService.execute(car2)

    const inicais = "Hon"

    const carFind = await findCarService.execute(inicais);

    expect(carFind[0]).toEqual(createdCar2)

  })


})