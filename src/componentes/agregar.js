import React, { useState } from 'react';

const Agregar_estudiante = ({ refreshList }) => {
  const [name, setName] = useState('');
  const [average, setAverage] = useState('');

  const handleAdd = () => {
    const estudiantes= JSON.parse(localStorage.getItem('estudiantes')) || [];
    const nuevo_estudiante = { id: Date.now(), name, average };
    estudiantes.push(nuevo_estudiante);
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    setName('');
    setAverage('');
    refreshList();
    alert('Alumno agregado correctamente!');
  };

  return (
    <div>
      <h2>Agregar Alumno</h2>
      <input
        type="text"
        placeholder="Nombre del alumno"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Promedio"
        value={average}
        onChange={(e) => setAverage(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
};

export default Agregar_estudiante;
