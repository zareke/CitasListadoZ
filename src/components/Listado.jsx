import React from 'react';
import Cita from './Cita';
import './Listado.css'
const Listado = ({ citas, eliminarCita }) => {
  return (
    <div>
      <h2>Listado de Citas</h2>
      {citas.length === 0 ? (
        <p>No hay citas</p>
      ) : (
        citas.map(cita => (
          <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
        ))
      )}
    </div>
  );
};

export default Listado;
