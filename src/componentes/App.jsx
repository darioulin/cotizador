import React, { Component } from "react";
import Header from "./Header.jsx";
import Formulario from "./Formulario.jsx";
import Resumen from "./Resumen";
import Resultado from "./Resultado";

import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from "../helper";

class App extends Component {
  state = { resultado: "", datos: {} };

  cotizarSeguro = datos => {
    const { marca, plan, year } = datos;
    // // Agregar un abase de 2000,
    let resultado = 2000;

    //Obtener la diferencia de años y por cada año restar el 3%
    const diferencia = obtenerDiferenciaAnio(year);
    // Por cada año restar el 3% al valor del cotizarSeguro
    resultado -= (diferencia * 3 * resultado) / 100;

    // Americano 15% Asiatico y Europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    // el plan del auto, el básico incrementa el valor 20% y cobertura completa 50%
    let incrementoPlan = obtenerPlan(plan);

    // Dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    // Crear objeto para el resumen
    const datosAuto = {
      marca: marca,
      plan: plan,
      year: year
    };
    this.setState({
      resultado: resultado,
      datos: datosAuto
    });
    console.log(resultado);
  };
  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto" />
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          <Resumen datos={this.state.datos} resultado={this.state.resultado} />
          <Resultado resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}
export default App;
