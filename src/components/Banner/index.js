import React from 'react'
import Img from '../../assets/imagem-home.svg'
import "./style.css"


const Banner = () => {
    return(
      <div className="main">
        
        <div>
          <h1>Minha primeira page em React</h1>
          <p>Seis meses em uma semanda... Reprograma </p>
        </div>
        <img src={Img} alt=''/>
      
      </div>
    )

}

export default Banner