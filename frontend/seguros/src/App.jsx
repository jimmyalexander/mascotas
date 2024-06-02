import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Registro } from './pages/Registro';
import { UserProvider } from './context/UserProvider';

import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import UserList from './components/UserList';
import { Recuperar } from './components/Recuperar';

const App = () => {

    return (
      <UserProvider>
         
         <Router>
            <div className="principal">
                <Navbar />
                <Routes>
                    <Route  path="/" element={<Login />} />
                    <Route   path="/login" element={<Login />} />
                    <Route   path="/registro" element={<Registro />} />
                    <Route   path="/clinicas" element={<Home />} />
                    <Route   path="/editusers" element={<UserList />} />
                    <Route   path="/recuperar" element={<Recuperar />} />
                </Routes>
                <Footer />
            </div>
        </Router>
      </UserProvider>
       
    );
};

export default App;