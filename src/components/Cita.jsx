import React from 'react';
import './Cita.css';

const Cita = ({ id, cita, eliminarCita }) => (
  <div className="cita">
    <p>Mascota: <span>{cita.mascota}</span></p>
    <p>Dueño: <span>{cita.propietario}</span></p>
    <p>Fecha: <span>{cita.fecha}</span></p>
    <p>Hora: <span>{cita.hora}</span></p>
    <p>Síntomas: <span>{cita.sintomas}</span></p>
    <button onClick={() => eliminarCita(id)} className="button eliminar">Eliminar ×</button>
  </div>
);

export default Cita;
