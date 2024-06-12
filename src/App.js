// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage'; // Asegúrate de que la ruta sea correcta
import SignUp from './Components/Sign_Up/SignUp';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Usando LandingPage */}
          <Route path="/signup" element={<SignUp />} /> {/* Ruta para Sign Up */}
          <Route path="/login" element={<Login />} /> {/* Ruta para Login */}
          {/* Aquí puedes añadir más rutas */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
