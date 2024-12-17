import React, { useState } from 'react';

const Actualizar_estudiante= ({ refreshList }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [average, setAverage] = useState('');

  const handleUpdate = () => {
    const estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
    const actualizar = estudiantes.map((estudiante) =>
      estudiante.id === parseInt(id) ? { ...estudiante, name, average } : estudiante
    );
    localStorage.setItem('estudiantes', JSON.stringify(actualizar));
    refreshList();
    alert('Alumno actualizado correctamente!');
  };

  return (
    <div>
      <h2>Actualizar Alumno</h2>
      <input
        type="text"
        placeholder="ID del alumno"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nuevo nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Nuevo promedio"
        value={average}
        onChange={(e) => setAverage(e.target.value)}
      />
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
};

export default Actualizar_estudiante;
