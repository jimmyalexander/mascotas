//UserList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    tipoUsuario: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    direccion: '',
    telefono: '',
    email: '',
    estado: '',
    contraseña: ''
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setFormData({
      tipoUsuario: user.tipoUsuario,
      primerNombre: user.primerNombre,
      segundoNombre: user.segundoNombre,
      primerApellido: user.primerApellido,
      segundoApellido: user.segundoApellido,
      direccion: user.direccion,
      telefono: user.telefono,
      email: user.email,
      estado: user.estado,
      contraseña: user.contraseña
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/users/${editingUser}`, formData);
      fetchUsers();
      setEditingUser(null);
      setFormData({
        tipoUsuario: '',
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        direccion: '',
        telefono: '',
        email: '',
        estado: '',
        contraseña: ''
      });
    } catch (error) {
      console.error('Error al actualizar el usuario', error);
    }
  };

  return (
    <div>
    <div className='panel_userlist'>
       <h1>Lista de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Tipo de Usuario</th>
            <th>Primer Nombre</th>
            <th>Segundo Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.tipoUsuario}</td>
              <td>{user.primerNombre}</td>
              <td>{user.segundoNombre}</td>
              <td>{user.primerApellido}</td>
              <td>{user.segundoApellido}</td>
              <td>{user.direccion}</td>
              <td>{user.telefono}</td>
              <td>{user.email}</td>
              <td>{user.estado}</td>
              <td>{user.contraseña}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingUser && (
        <form onSubmit={handleSubmit}>
          <h2>Editar Usuario</h2>
          <label>
            Tipo de Usuario:
            <input
              type="text"
              name="tipoUsuario"
              value={formData.tipoUsuario}
              onChange={handleChange}
            />
          </label>
          <label>
            Primer Nombre:
            <input
              type="text"
              name="primerNombre"
              value={formData.primerNombre}
              onChange={handleChange}
            />
          </label>
          <label>
            Segundo Nombre:
            <input
              type="text"
              name="segundoNombre"
              value={formData.segundoNombre}
              onChange={handleChange}
            />
          </label>
          <label>
            Primer Apellido:
            <input
              type="text"
              name="primerApellido"
              value={formData.primerApellido}
              onChange={handleChange}
            />
          </label>
          <label>
            Segundo Apellido:
            <input
              type="text"
              name="segundoApellido"
              value={formData.segundoApellido}
              onChange={handleChange}
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Estado:
            <input
              type="text"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Actualizar</button>
        </form>
      )}
       </div>
    </div>
  );
};

export default UserList;

