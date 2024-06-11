import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Usando LandingPage */}
          {/* Aquí puedes añadir más rutas */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
