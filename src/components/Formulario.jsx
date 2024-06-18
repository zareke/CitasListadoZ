import React, { useState } from 'react';
import './Formulario.css';

const Formulario = ({ agregarCita }) => {
  const [cita, setCita] = useState({
    id: '',
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const [error, setError] = useState(false);

  const actualizarState = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const generarId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const submitCita = e => {
    e.preventDefault();

    if (
      cita.mascota.trim() === '' ||
      cita.propietario.trim() === '' ||
      cita.fecha.trim() === '' ||
      cita.hora.trim() === '' ||
      cita.sintomas.trim() === ''
    ) {
      setError(true);
      return;
    }

    setError(false);

    // Mostrar la alerta de confirmación
    const confirmacion = window.confirm('¿Estás seguro de que deseas agregar esta cita?');
    if (!confirmacion) {
      return;
    }

    cita.id = generarId();

    agregarCita(cita);

    setCita({
      id: '',
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  };

  return (
    <div>
      <h2>Crear Cita</h2>
      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="elinput"
          placeholder="Nombre de mascota"
          onChange={actualizarState}
          value={cita.mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="elinput"
          placeholder="Nombre del dueño de la mascota"
          onChange={actualizarState}
          value={cita.propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="elinput"
          onChange={actualizarState}
          value={cita.fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="elinput"
          onChange={actualizarState}
          value={cita.hora}
        />
        <label>Síntomas</label>
        <textarea
          className="elinput"
          name="sintomas"
          onChange={actualizarState}
          value={cita.sintomas}
        ></textarea>
        <button type="submit" className="elinput">Agregar Cita</button>
      </form>
    </div>
  );
};

export default Formulario;
