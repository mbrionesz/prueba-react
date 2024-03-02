import React, { useState } from 'react';

const Buscador = ({ onSearch }) => {
  const [termino, setTermino] = useState('');

  const handleChange = (e) => {
    setTermino(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar..."
      value={termino}
      onChange={handleChange}
    />
  );
};

export default Buscador;
