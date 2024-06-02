import axios from 'axios';
import { useState } from 'react';
import logo2 from '../assets/img/logo_mascotas_form.jpg';
import { Link} from 'react-router-dom';


export const Registro = () => {
    const [tipoUsuario, settipoUsuario] = useState('cliente');
    const [primerNombre, setprimerNombre] = useState('');
    const [segundoNombre, setsegundoNombre] = useState('');
    const [primerApellido, setprimerApellido] = useState('');
    const [segundoApellido, setsegundoApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [estado, setEstado] = useState('activo');
    const [contraseña, setContraseña] = useState('');


    const [isCheck, setIsCheck] = useState(false);


  

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users', {tipoUsuario, primerNombre,segundoNombre, primerApellido,segundoApellido,direccion,telefono,email, estado, contraseña });
            console.log(response.data);
            setprimerNombre('');
            setsegundoNombre('');
            setprimerApellido('');
            setsegundoApellido('');
            setDireccion('');
            setTelefono('');
            setEmail('');
            setContraseña('');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleCheckBox = (e) =>{
        setIsCheck(!isCheck);
        setIsCheck(e);

    }
    return(
    <div>
    <div className="panel_formulario">
        <div className="registro_img">
          <img src={logo2} />
        </div>
        <div className='contenedor_formulario'>
        <h1>Registro de Usuario</h1>
        <form className='formulario' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='primer_nombre'>Primer Nombre</label>
                <input id='primer_nombre' type="text" value={primerNombre} onChange={(e) => setprimerNombre(e.target.value)} required />
            </div>
            <div>
                <label htmlFor='segundo_nombre'>Segundo Nombre</label>
                <input id='segundo_nombre' type="text" value={segundoNombre} onChange={(e) => setsegundoNombre(e.target.value)} required />
            </div>
            <div>
                <label htmlFor='primer_apellido'>Primer Apellido</label>
                <input id='primer_apellido' type="text" value={primerApellido} onChange={(e) => setprimerApellido(e.target.value)} required />
            </div>
            <div>
                <label htmlFor='segundo_apellido'>Segundo Apellido</label>
                <input id='segundo_apellido' type="text" value={segundoApellido} onChange={(e) => setsegundoApellido(e.target.value)} required />
            </div>
            <div>
                <label htmlFor='direccion'>Direccion</label>
                <input id='direccion' type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
            </div>
            <div>
                <label htmlFor='telefono'>Telefono</label>
                <input id='telefono'type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label htmlFor='pass'>Contraseña</label>
                <input id='pass' type={!isCheck ? "password":"text"} value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
            </div>
            <div className="radio">
             <label><input className="radio_password" type="checkbox" onChange={handleCheckBox} checked={isCheck} id="cbox1" value="first_checkbox" /> Ver contraseña</label>
            </div>
            <div className="ancla_login">
              <Link to='/login'>Inicia Sesión</Link> 
            </div>
            <button type="submit">Create User</button>
        </form>
        </div>
        </div>
    </div>
    );
}