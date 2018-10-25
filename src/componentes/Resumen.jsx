import React, { Component } from "react";
import { primeraMayuscula } from "../helper";

class Resumen extends Component {
  render() {
    const { marca, year, plan } = this.props.datos;
    if (!marca || !year || !plan) return null;
    return (
      <div className="resumen">
        <h2>Resumen de Cotización</h2>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Año: {year}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
      </div>
    );
  }
}

export default Resumen;
