import React from 'react';

const Navbar = ({ setCurrentView }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => setCurrentView('add')}>Agregar Alumno</li>
        <li onClick={() => setCurrentView('update')}>Actualizar Alumno</li>
        <li onClick={() => setCurrentView('list')}>Listar Alumnos</li>
      </ul>
    </nav>
  );
};

export default Navbar;
