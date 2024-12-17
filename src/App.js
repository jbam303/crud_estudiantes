import React, { useState } from 'react';
import Navbar from './componentes/navbar';
import Agregar_estudiante from './componentes/agregar';
import Actualizar_estudiante from './componentes/actualizar';
import Lista_estudiantes from './componentes/lista_estudiantes';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('list');
  const [refresh, setRefresh] = useState(false);

  const refreshList = () => setRefresh(!refresh);

  return (
    <div className="App">
      <Navbar setCurrentView={setCurrentView} />
      <main>
        {currentView === 'add' && <Agregar_estudiante refreshList={refreshList} />}
        {currentView === 'update' && <Actualizar_estudiante refreshList={refreshList} />}
        {currentView === 'list' && <Lista_estudiantes refresh={refresh} />}
      </main>
      <footer>
        <p>Desarrollado por Johan y rodrigo</p>
      </footer>
    </div>
  );
}

export default App;
