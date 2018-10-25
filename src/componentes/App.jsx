import React, { Component } from "react";
import Header from "./Header.jsx";
import Formulario from "./Formulario.jsx";
// import { obtenerDiferenciaAnio } from "../helper";

class App extends Component {
  cotizarSeguro = datos => {
    console.log(datos);
    // const { marca, plan, year } = datos;
    // // // Agregar un abase de 2000,
    // let resultado = 2000;
    //
    // //Obtener la diferencia de años y por cada año restar el 3%
    // const diferencia = obtenerDiferenciaAnio(year);
    // console.log(diferencia);
    // Por cada año restar el 3% al valor del cotizarSeguro

    // Americano 15% Asiatico y Europeo 30% de incremento al valor actual
  };
  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto" />
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
        </div>
      </div>
    );
  }
}
export default App;
