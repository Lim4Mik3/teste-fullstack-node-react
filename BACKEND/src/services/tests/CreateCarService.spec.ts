import { CarsRepositoryInMemory } from "../../repositories/implementations/CarsRepositoryInMemory";
import { CreateCarService } from "../CreateCarService";


let createCarService: CreateCarService;
let carsRepositoryInMemory: CarsRepositoryInMemory;


describe("Serviço de criação de veiculos", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarService = new CreateCarService(carsRepositoryInMemory);
  })

  it("Deve ser possivel criar um carro", async () => {
    const car = {
      veiculo: "Strada",
      ano: 2009,
      descricao: "Carro de trabalho",
      marca: "Fiat",
      vendido: false
    }

    const createdCar = await createCarService.execute(car)
    
    expect(createdCar).toHaveProperty("created");
  })

})