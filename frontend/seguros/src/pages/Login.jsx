import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo_mascotas.jpg';
import { UserContext } from '../context/UserContext';

export const Login = () => {
  const { user, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/clinicas'); // Redirigir si el usuario ya está autenticado
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, contraseña })
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: 'LOGIN', payload: data.user });
        navigate('/clinicas'); // Redirigir después de iniciar sesión
      } else {
        setError(data.error || 'Error desconocido');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div>
      <div className="panel_login">
        <div className="login_img">
          <img src={logo} alt="logo" />
        </div>
        <div className='login_formulario'>
          <h1>Iniciar Sesión</h1>
          <form className='formulario' onSubmit={handleLogin}>
            <div>
              <label htmlFor='email'>Correo</label><br />
              <input id='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor='pass'>Contraseña</label><br />
              <input id='pass' type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
            </div>
            <div className="ancla_registro">
              <Link to='/registro'>¿Eres nuevo? Regístrate</Link>
            </div>
            <div className="ancla_recuperar">
              <Link to='/recuperar'>¿Olvidaste tu contraseña?</Link>
            </div>
            <button type="submit">Iniciar Sesión</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
/* import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo_mascotas.jpg';
import { UserContext } from '../context/UserContext';

export const Login = () => {
  const { dispatch } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, contraseña })
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: 'LOGIN', payload: data.user });
        navigate('/clinicas');
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <div className="panel_login">
        <div className="login_img">
          <img src={logo} alt="logo" />
        </div>
        <div className='login_formulario'>
          <h1>Iniciar Sesión</h1>
          <form className='formulario' onSubmit={handleLogin}>
            <div>
              <label htmlFor='email'>Correo</label><br />
              <input id='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor='pass'>Contraseña</label><br />
              <input id='pass' type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
            </div>
            <div className="ancla_registro">
              <Link to='/registro'>¿Eres nuevo? Regístrate</Link>
            </div>
            <button >Iniciar Sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}; */