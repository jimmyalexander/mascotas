import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import React, { useEffect, useState, useReducer, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


export const Navbar = () => {
        const location = useLocation();
        const{ state,dispatch } = useContext(UserContext)
        const {isLoggedIn,user} = state;
        const [activeMenu, setactiveMenu] = useState(false);
        const navigate = useNavigate();

    


    const handleClick =(e)=>{
        setactiveMenu(!activeMenu);
    }


    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
        navigate('/login'); // Redirigir después de iniciar sesión
    }

    return(
        <div className="panel Navbar">
            <div className="contenedor_navbar">
                <div className="navbar_home">
                    <Link to={isLoggedIn ? '/clinicas':'/login'}>PET'S  INSURANCE</Link>
                </div>
                <div className="navbar_list">
                    <ul className='list'>
                        <li className={isLoggedIn && user.tipoUsuario === "admin"? 'mostrar': 'ocultar'}><Link to='/editusers'>Editar Usuarios</Link></li>
                        <li className={isLoggedIn? 'mostrar': 'ocultar'}><Link to='/clinicas'>Clinicas</Link></li>
                        <li><a href="#">Planes</a></li>
                        <li  className={isLoggedIn?'ocultar':'mostrar'}> <Link to={location.pathname === '/registro'?'/login':'/registro'}>{location.pathname === '/registro'?'Iniciar Sesión':'Registrarme'}</Link></li>
                        <li className={isLoggedIn?'mostrar':'ocultar'}><a href="#">{isLoggedIn? user.primerNombre: ''}</a></li>
                        <li className={isLoggedIn?'mostrar':'ocultar'}> 
                            <Icon onClick={handleClick}  path={mdiMenuDown}
                                title="User Profile"
                                size={1}
                                horizontal
                                vertical
                                rotate={180}
                                color="gray"
                            />
                            <ul className={ activeMenu? 'list-desplegable active': 'list-desplegable'} >
                                <li><a>Editar Perfil</a></li>
                                <li><button className="cerrarsesion" button onClick={handleLogout} type="submit">Cerrar Sesión</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}