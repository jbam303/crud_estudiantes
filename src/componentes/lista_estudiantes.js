import React, { useEffect, useState } from 'react';

const Lista_estudiantes = ({ refresh }) => {
  const [estudiantes, setEstudiantes] = useState([]);

  const cargar_estudiantes = () => {
    const storedEstudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
    setEstudiantes(storedEstudiantes);
  };

  useEffect(() => {
    cargar_estudiantes();
  }, [refresh]);

  const handleDelete = (id) => {
    const filtered = estudiantes.filter((estudiante) => estudiante.id !== id);
    localStorage.setItem('estudiantes', JSON.stringify(filtered));
    cargar_estudiantes();
    alert('Alumno eliminado correctamente!');
  };

  return (
    <div>
      <h2>Listado de Alumnos</h2>
      {estudiantes.length > 0 ? (
        <ul>
          {estudiantes.map((estudiante) => (
            <li key={estudiante.id}>
              {estudiante.name} - Promedio: {estudiante.average}{' '}
              <button onClick={() => handleDelete(estudiante.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay alumnos registrados.</p>
      )}
    </div>
  );
};

export default Lista_estudiantes;
