import React, { useState } from 'react';
import './Formulario.css';

const Formulario = ({ agregarCita }) => {
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cita.mascota.trim() === '' || cita.propietario.trim() === '' || cita.fecha.trim() === '' || 
        cita.hora.trim() === '' || cita.sintomas.trim() === '') {
      alert('Todos los campos son obligatorios');
      return;
    }

    agregarCita(cita);
    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre de mascota</label>
      <input type="text" name="mascota" value={cita.mascota} onChange={handleChange} className="campo"/>
      <label>Nombre del dueño</label>
      <input type="text" name="propietario" value={cita.propietario} onChange={handleChange} className="campo"/>
      <label>Fecha</label>
      <input type="date" name="fecha" value={cita.fecha} onChange={handleChange} className="campo"/>
      <label>Hora</label>
      <input type="time" name="hora" value={cita.hora} onChange={handleChange} className="campo"/>
      <label>Síntomas</label>
      <textarea name="sintomas" value={cita.sintomas} onChange={handleChange} className="campo"></textarea>
      <button type="submit" className="submitboton">Agregar cita +</button>
    </form>
  );
};

export default Formulario;
