import React, { Component } from "react";
import Header from "./Header.jsx";
import Formulario from "./Formulario.jsx";
class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto" />
        <div className="contenedor-formulario">
          <Formulario />
        </div>
      </div>
    );
  }
}
export default App;
