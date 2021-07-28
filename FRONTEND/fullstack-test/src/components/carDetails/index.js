import { FaTag } from 'react-icons/fa'
import { HiOutlinePencil } from 'react-icons/hi'
import Lottie from 'react-lottie'
import carAnimation from '../../assets/car.json'

import './styles.css'

function CardDetails(props) {

  const { carDetails } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="cardDetailsContainer">
      {carDetails ? 
        <>
          <div>
            <h3 className="cardDetailsTitle">{carDetails.veiculo}</h3>
            <div className="subHeader">
              <div className="cardDetailsMarca">
                <strong>Marca</strong>
                <span>{carDetails.marca}</span>
              </div>
        
              <div className="cardDetailsAno">
                <strong>Ano</strong>
                <span>{carDetails.ano}</span>
              </div>
            </div>
        
            <main>
              <p>{carDetails.descricao}</p>
            </main>
          </div>
        
          <footer>
            <button type="button" >
              <HiOutlinePencil size={25} color="#fff"/>
              <p>Editar</p>
            </button>
              <FaTag size={20} color="#364147"/>
          </footer>
        </>
      :     
      <div>
        <h3 className="titleEmpty">Escolha um veículo para ver os detalhes</h3>
        <Lottie 
	      options={defaultOptions}
        height={400}
        width={400}
      />

      </div> }
    </div>
  ) 
}

export { CardDetails };

