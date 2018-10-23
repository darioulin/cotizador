import React, { Component } from "react";
import Header from "./Header.jsx";
class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto" />
      </div>
    );
  }
}

export default App;
