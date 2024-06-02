import React, { useState } from 'react';
import axios from 'axios';

export const Recuperar = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Correo Electrónico:
          <input type="email" value={email} onChange={handleChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
