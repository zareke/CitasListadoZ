import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import './App.css'

const App = () => {
  const [citas, setCitas] = useState([]);

  const agregarCita = cita => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = id => {
    const confirmacion = window.confirm('¿Seguro que quieres eliminar esta cita?');
    if (confirmacion) {
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      setCitas(nuevasCitas);
    }
  };

  return (
    <div className="container">
      <h1>Administrador de Citas</h1>
      <div className="row">
        <div className="cont">
          <Formulario agregarCita={agregarCita} />
        </div>
        <div className="cont">
          <Listado citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </div>
  );
};

export default App;
