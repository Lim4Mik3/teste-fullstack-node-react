interface ICreateDTO {
  veiculo: string;
  ano: Number,
  descricao: string;
  marca: string;
  vendido: Boolean; 
}

interface ICarsRepository {
  create(data: ICreateDTO): Promise<any>;
  list(): Promise<any[]>;
  find(q: string): Promise<any>;
}

export { ICarsRepository, ICreateDTO };