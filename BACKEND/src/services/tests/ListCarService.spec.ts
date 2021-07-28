import { CarsRepositoryInMemory } from "../../repositories/implementations/CarsRepositoryInMemory";
import { CreateCarService } from "../CreateCarService";
import { ListCarService } from "../ListCarService";

let createCarService: CreateCarService;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let listCarService: ListCarService;


describe("Serviço de buscar todos os carros", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarService = new CreateCarService(carsRepositoryInMemory);
    listCarService = new ListCarService(carsRepositoryInMemory);
  })

  it("Deve ser possivel encontrar todos os carros", async () => {
    const car = {
      veiculo: "Toro Endurance",
      ano: 2018,
      descricao: "Carro 4x4",
      marca: "Fiat",
      vendido: false
    }

    const car2 = {
      veiculo: "Audi RS7",
      ano: 2020,
      descricao: "Carro Sedan",
      marca: "Audi",
      vendido: false
    }

    const car3 = {
      veiculo: "Golf",
      ano: 2020,
      descricao: "Carro Hatch",
      marca: "Volkswagen",
      vendido: false
    }

    await createCarService.execute(car)
    await createCarService.execute(car2)
    await createCarService.execute(car3)

    const result = await listCarService.execute();

    expect(result).toHaveLength(3);

  })


})