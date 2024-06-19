import React from 'react';
import Cita from './Cita';
import './ListaCitas.css';

const ListaCitas = ({ citas, eliminarCita }) => (
  <div className="listacitas">
    <h2>Citas:</h2>
    {citas.map((cita, index) => (
      <Cita key={index} id={index} cita={cita} eliminarCita={eliminarCita} />
    ))}
  </div>
);

export default ListaCitas;
