import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MiApi from './components/MiApi';
import Table from 'react-bootstrap/Table';
import Buscador from './components/buscador';
import { useState } from 'react';

const App = () => {
  const [busqueda, setBusqueda] = useState('');

  return (
    <div className="App">
      <header>
        <h1>Mi Aplicación de Feriados</h1>
      </header>
      <div className="content">
        <div className='search-content'>
        {/* Buscador */}
        <Buscador onSearch={setBusqueda} />
        </div>
        {/* Tabla de feriados */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Título</th>
              <th>Tipo</th>
              <th>Inalienable</th>
              <th>Extra</th>
            </tr>
          </thead>
          <tbody>
            {/* El componente MiApi maneja el renderizado de cada fila de la tabla */}
            <MiApi busqueda={busqueda} />
          </tbody>
        </Table>
      </div>

      <footer>
        <p>&copy; 2024 Mi Aplicación de Feriados - Matias Briones</p>
      </footer>
    </div>
  );
};

export default App;

