import React, { useState, useEffect } from 'react';
import Buscador from './buscador';

// Datos simulados basados en la estructura de la API de feriados
const datosSimulados = [
  { date: "2024-01-01", title: "Año Nuevo", type: "Civil", inalienable: true, extra: "Civil e Irrenunciable" },
  { date: "2024-03-29", title: "Viernes Santo", type: "Religioso", inalienable: false, extra: "Religioso" },
  { date: "2024-03-30", title: "Sábado Santo", type: "Religioso", inalienable: false, extra: "Religioso" },
  { date: "2024-05-01", title: "Día Nacional del Trabajo", type: "Civil", inalienable: true, extra: "Civil e Irrenunciable" },
];

const MiApi = ({busqueda}) => {
  const [datos, setDatos] = useState(datosSimulados); // Inicializamos el estado con los datos simulados
  

  // Logica de la API de feriados
  /*
  useEffect(() => {
    const fetchApiData = async () => {
      const response = await fetch('URL_DE_TU_API');
      const json = await response.json();
      setDatos(json.data); // Actualizaría el estado con los datos de la API
    };

    // Descomentar la siguiente línea cuando la API esté lista para ser consumida
    // fetchApiData();
  }, []);
  */

  // Filtrado basado en 'busqueda'
  const datosFiltrados = datos.filter((dato) =>
    dato.title.toLowerCase().includes(busqueda.toLowerCase()) ||
    dato.type.toLowerCase().includes(busqueda.toLowerCase()) ||
    dato.date.includes(busqueda) ||
    (dato.inalienable ? 'Sí' : 'No').includes(busqueda) ||
    dato.extra.toLowerCase().includes(busqueda.toLowerCase())
  );

  const datosOrdenadosYFiltrados = datosFiltrados.sort((a, b) => new Date(a.date) - new Date(b.date));  // Comando basado en el metodo de sort, hace un orden en la estructura del array.

  return (
    // Renderizamos los datos usando el estado 'datos' como filas de tabla
    <> 
       {datosOrdenadosYFiltrados.map((dato) => (
        <tr key={dato.date}>
          <td>{dato.date}</td>
          <td>{dato.title}</td>
          <td>{dato.type}</td>
          <td>{dato.inalienable ? 'Sí' : 'No'}</td>
          <td>{dato.extra}</td>
        </tr>
      ))}
    </>
  );
};

export default MiApi;
