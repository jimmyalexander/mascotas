
import veterinaria1 from '../assets/img/veterinaria1.jpg';
import veterinaria2 from '../assets/img/veterinaria2.jpg';
import veterinaria3 from '../assets/img/veterinaria3.jpg';
import veterinaria4 from '../assets/img/veterinaria4.jpg';
import veterinaria5 from '../assets/img/veterinaria5.jpg';
import veterinaria6 from '../assets/img/veterinaria6.jpg';


export const Home = () =>{

   
    return(
       <div>
            <div className="panel_home">
                <header>
                    <h1>Veterinarias</h1>
                </header>
            <main className="home_veterinarias">
            <div className="veterinaria">
                <h2>VidaVet</h2>
                <ul>
                    <li>Baño para gatos: $20</li>
                    <li>Baño para perros: $25</li>
                    <li>Cirugía para tortugas: $100</li>
                    <li>Venta de medicamentos: $50</li>
                    <li>Venta de utensilios: $30</li>
                </ul>
                <div className="veterinaria_img">
                    <div className="container_veterinaria_img">
                        <img src={veterinaria1} />
                    </div>
                    <button >Suscribirse</button>
                </div>
            </div>

            <div className="veterinaria">
                <h2>Arca de Noé</h2>
                <ul>
                    <li>Baño para gatos: $18</li>
                    <li>Baño para perros: $22</li>
                    <li>Cirugía para tortugas: $120</li>
                    <li>Venta de medicamentos: $60</li>
                    <li>Venta de utensilios: $35</li>
                </ul>
                <div className="veterinaria_img">
                    <div className="container_veterinaria_img">
                        <img src={veterinaria2} />
                    </div>
                    <button >Suscribirse</button>
                </div>
            </div>

            <div className="veterinaria">
                <h2>Mundo Animal</h2>
                <ul>
                    <li>Baño para gatos: $22</li>
                    <li>Baño para perros: $27</li>
                    <li>Cirugía para tortugas: $110</li>
                    <li>Venta de medicamentos: $55</li>
                    <li>Venta de utensilios: $40</li>
                </ul>
                <div className="veterinaria_img">
                    <div className="container_veterinaria_img">
                        <img src={veterinaria3} />
                    </div>
                    <button >Suscribirse</button>
                </div>
            </div>

            <div className="veterinaria">
                <h2>Patas y Colas</h2>
                <ul>
                    <li>Baño para gatos: $19</li>
                    <li>Baño para perros: $24</li>
                    <li>Cirugía para tortugas: $115</li>
                    <li>Venta de medicamentos: $58</li>
                    <li>Venta de utensilios: $33</li>
                </ul>
                <div className="veterinaria_img">
                    <div className="container_veterinaria_img">
                        <img src={veterinaria4} />
                    </div>
                    <button >Suscribirse</button>
                </div>
                
            </div>
            <div className="veterinaria">
                <h2>Refugio de Mascotas</h2>
                <ul>
                    <li>Baño para gatos: $20</li>
                    <li>Baño para perros: $25</li>
                    <li>Cirugía para tortugas: $100</li>
                    <li>Venta de medicamentos: $50</li>
                    <li>Venta de utensilios: $30</li>
                </ul>
                <div className="veterinaria_img">
                    <div className="container_veterinaria_img">
                        <img src={veterinaria5} />
                    </div>
                    <button >Suscribirse</button>
                </div>
            </div>

            <div className="veterinaria">
                <h2>SanarPaws</h2>
                <ul>
                    <li>Baño para gatos: $18</li>
                    <li>Baño para perros: $22</li>
                    <li>Cirugía para tortugas: $120</li>
                    <li>Venta de medicamentos: $60</li>
                    <li>Venta de utensilios: $35</li>
                </ul>
                <div className="veterinaria_img">
                    <div className="container_veterinaria_img">
                        <img src={veterinaria6} />
                    </div>
                    <button >Suscribirse</button>
                </div>
            </div>

           
        </main>
        </div>
       </div>
    )
}