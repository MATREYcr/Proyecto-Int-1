
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './pages/HomePage';
import MedicamentosPage from './pages/MedicamentosPage';
import MedicosPage from './pages/MedicosPage';
import PacientesPage from './pages/PacientesPage';
import Patients from './pages/PacientesPage';

function App() {
  return (
    <>
      
      <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Pacientes' element={<PacientesPage />}/>
        <Route path='/Medicos' element={<MedicosPage />}/>
        <Route path='/Medicamentos' element={<MedicamentosPage />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
