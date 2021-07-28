import { useState, useEffect, useMemo } from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { api } from './services/api'
import { FaTag } from 'react-icons/fa'
import { debounce } from 'lodash'

import './styles.css'

import Modal from 'react-modal'

import logo from './assets/logo.PNG'

import "./App.css"
import { CardDetails } from './components/carDetails'

Modal.setAppElement('#root');

function App() {
  const [vehicle, setVehicle ] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listCars, setListCars] = useState([])
  const [specificCar, SetSpecificCar] = useState([])
  const [carDetail, setCarDetails] = useState(null)
  const [veiculo, setVeiculo] = useState("")
  const [marca, setMarca] = useState("")
  const [ano, setAno] = useState(0)
  const [vendido, setVendido] = useState(false)
  const [descricao, setDescricao] = useState("")

  const debounceSearch = debounce(() => {
    getSpecificCars()
  }, 1500)

  const handleInputSearch = (event) => {
    setVehicle(event.target.value)

    debounceSearch();
  }

  useEffect(() => {
    async function load() {
      getCars()
    } 

    load()
  }, [])

  async function getCars() {
    const { data } = await api.get("/veiculos");

    setListCars(data);
  }

  async function getSpecificCars() {
    const { data: cars } = await api.get("/veiculos/find", {
      params: {
        q: vehicle
      }
    })

    SetSpecificCar(cars);
  }

  function OpenModal() {
    setModalIsOpen(true)
  }

  async function handleForm() {
    await api.post("/veiculos", {
      veiculo,
      ano,
      marca,
      vendido,
      descricao
    })

    setVeiculo('')
    setMarca('')
    setAno(0)
    setVendido(false)
    setDescricao('')

    setModalIsOpen(false)
    await getCars()
  }

  return (
    <div className="App">
      <header>
        <div>
          <img src={logo} alt="Fullstack" />
          <input 
            type="text"
            placeholder="Busca por um veículo..."
            value={vehicle}
            onChange={handleInputSearch}
          />
        </div>
      </header>

      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)'
          },
          content: {
            backgroundColor: '#e2e4e1',
            margin: 'auto',
            height: '60%',
            maxWidth: "800px",
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        
        <div className="modal">
        <div className="formGroup">
        <h3 className="modalTitlte">Novo Veículo</h3>
          <div>
            <label>
              Veículo:
              <input 
                type="text" 
                name="veiculo"
                value={veiculo}
                onChange={(e) => {setVeiculo(e.target.value)}}
                placeholder="Digite o nome do veiculo"
              />
            </label> 

            <label>
              Marca:
              <input 
                type="text" 
                name="marca" 
                value={marca}
                onChange={(e) => {setMarca(e.target.value)}}
                placeholder="Digite a marca do veículo"
              />
            </label> 
          </div>

          <div>
            <label>
              Ano:
              <input 
                type="number" 
                name="ano"
                value={ano}
                onChange={(e) => {setAno(e.target.value)}}
                placeholder="Digite o ano do veículo"
              />
            </label>

            <label>
              Vendido:
              <input 
                type="checkbox" 
                value={vendido}
                onChange={(e) => {setVendido(e.target.value)}}
                name="vendido"
              />
            </label>
          </div>

          <div>
            <label>
              Descrição:
              <input 
                type="textarea" 
                name="descricao"
                value={descricao}
                onChange={(e) => {setDescricao(e.target.value)}}
                placeholder="Digite a descrição do veiculo"
              />
            </label>
          </div>
        </div>

        <footer>
          <button type="button" onClick={() => handleForm()}>
            ADD
          </button>

          <button type="button" onClick={() => setModalIsOpen(false)}>
            FECHAR
          </button>
        </footer>
        </div>
  
      </Modal>

      <div className="container">
        <div className="contentHeader">
          <h2>Veículos</h2>
          <button onClick={OpenModal} >
            <BsPlusCircleFill className="plusButton" size={35} color="#364147"/>
          </button>
        </div>

        <div className="contentBody">
          <p className="carListTitle">
            Lista de veículos
          </p>

          <p className="carDetailsTitle">
            Detalhes do veículo
          </p>

          <div className="carsList">
            { specificCar.length > 0 ? 
            (
              specificCar.map((car, index) => (
                <div className="cardContainer" key={car._id} onClick={() => setCarDetails(index)}>
                <div className="cardContent">
                  <strong>{car.marca}</strong>
                  <p>{car.veiculo}</p>
                  <span>{car.ano}</span>
                  </div>
                  <aside>
                    <FaTag className="plusButton" size={25} color={!!car.vendido ? '#418252' : '#364147' }/>
                  </aside>
                </div>
                ))          
            ): 
            (
              listCars.length !== 0 ? listCars.map((car, index) => (
                <div className="cardContainer" key={car._id} onClick={() => setCarDetails(index)}>
                <div className="cardContent">
                  <strong>{car.marca}</strong>
                  <p>{car.veiculo}</p>
                  <span>{car.ano}</span>
                  </div>
                  <aside>
                    <FaTag className="plusButton" size={25} color={!!car.vendido ? '#418252' : '#364147' }/>
                  </aside>
                </div>
               )) : 
                 <p className="emptyList">
                   Cadastre um novo carro
                 </p>           
            ) }
          </div>

          <div className="carDetails">
            <CardDetails carDetails={carDetail != null ? listCars[carDetail] : null} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
