import React, { useState } from 'react';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import ListaCitas from './components/ListaCitas';
import './App.css';


const App = () => {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    if (window.confirm('¿Desea agregar esta cita?')) {
      setCitas([...citas, cita]);
    }
  };

  const eliminarCita = (id) => {
    if (window.confirm('¿Desea eliminar esta cita?')) {
      setCitas(citas.filter((cita, index) => index !== id));
    }
  };

  return (
    <div className="container">
      <Titulo />
      <div className="content">
        <div className="formulario">
          <Formulario agregarCita={agregarCita} />
        </div>
        <div className="listota">
          <ListaCitas citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </div>
  );
};

export default App;