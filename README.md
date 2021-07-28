# Teste fullstack -- FINALIZADO Leonardo Oliveira

## Instruções para instalação

O projeto está separa entre o backend e frontend pelas pastas nessa raiz.

Entre no diretório do backend abra o console ou prompt de comando e execute `YARN` para instalação de todas as dependencias necessárias.

Após isso execute o comando `YARN DEV` no console para executar o sistema em ambiente de desenvolvimento, o projeto está usando um banco de dados noSQL online direto do atlas MONGODB, com isso, temos a facilidade nas instalações.

Se aparecer a mensagem no console `SERVER IS RUNNING` e logo após `Database connection success!` quer dizer que tudo ocorreu bem e o backend está pronto para execução.

Vamos partir para o frontend, da mesma forma entre no diretório raiz e execute o comando `YARN` para instalação das dependencias.

Após isso execute o comando `YARN START` para iniciar a aplicação e acesse o enderenço htpp://localhost:3000.

## TESTES

Foi solicitado a execução dos testes da API criada, para isso tive que aplicar os principios do SOLID para que isso fosse possivel, como a inversão de dependencias. Abra o console e execute `YARN TEST` e os testes iram ser executados.

Para os testes usei o jest.


#### Obrigado.


Leia primeiro todo o projeto, faça sua estimativa de horas para o desenvolvimento e envie um email com o título `[Teste Fullstack] Estimativa` para rh@4.events

Forke este projeto, faça o desenvolvimento e quando finalizar faça um PR aqui. Envie um email com o título `[Teste Fullstack] Finalizado` para rh@4.events com o link do seu PR.

Se você não sabe o que é fazer um "Forke" ou um "PR", pesquise. Valorizamos muito a proatividade.

**Lembre-se: atualize este README informando como instalar e executar seu projeto.**

## Missão backend

Desenvolver uma **API JSON RESTful** em **Node**, que utilize os métodos `GET` e `POST`.

Faça o teste unitário da **API** (Bônus :star:)
### Especificação

Monte uma base de veículo com a seguinte estrutura:

```
veiculo:   string
ano:       integer
descricao: text
vendido:   bool
created:   datetime
```

Utilize **MongoDB** ou **MySQL** para armazenar os dados que a **API** irá consumir.

### API endpoints

`GET /veiculos`

Retorna todos os veículos

---

`GET /veiculos/find`

Retorna os veículos de acordo com o termo passado parâmetro `q`

---

`POST /veiculos`

Adiciona um novo veículo


## Missão frontend

Desenvolver uma **UI (User Interface)** de acordo com o desenho que está na pasta [layout]

### Especificação

- Cross browser support (IE11+)
- Consumir **API** criada acima
- Criar uma tela que tenha...
    - Listagem de veículos
    - Busca
    - Formulário de novo veículo

### Dica

Utilize algum framework para auxiliar no desenvolvimento da interface, por exemplo:

- https://getmdl.io/
- http://getbootstrap.com/css/
- http://foundation.zurb.com/

## Dúvida

Se tiver qualquer dúvida sobre esse teste, envie um email com o título `[Teste Fullstack] O assunto que vc deseja` para rh@4.events
