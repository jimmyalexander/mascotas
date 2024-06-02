import React from 'react';
import { mdiFacebook, mdiInstagram, mdiTwitter, mdiYoutube} from '@mdi/js';
import Icon from './Iconos';


export const Footer = () => {
 
  return (
    <div>
      <div className="container_footer">
        
        <div className="container_redes">
          <h3>Siguenos en redes</h3>

          <div className="redes">
            <div className="container-icon">
              <a target='blanck' href="https://facebook.com">
                 <Icon className='facebook'  size={'20px'} icon={ mdiFacebook } />
              </a>
            </div>
          </div>

          <div className="redes">
            <div className="container-icon">
              <a target='blanck' href="https://twitter.com">
                <Icon className='twitter'  size={'20px'} icon={ mdiTwitter } />
              </a>
            </div>
          </div>

          <div className="redes">
            <div className="container-icon">
              <a target='blanck' href="https://instagram.com">
               <Icon className='instagram'  size={'20px'} icon={ mdiInstagram } />
              </a>
            </div>
          </div>

          <div id='redes_sociales' className="redes">
            <div className="container-icon">
              <a target='blanck' href="https://youtube.com">
               <Icon className='youtube'  size={'20px'} icon={ mdiYoutube } />
              </a>
            </div>
          </div>
        </div>

        <div className="container_soporte">
          <div className="soporte">
            <a href="http">Sobre Nosotros</a>
            <a href="http">Servicio Al Cliente</a>
            <a href="http">Terminos y Condiciones</a>
          </div>
        </div>

      </div>
     
    </div>
  )
}