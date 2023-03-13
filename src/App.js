
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './pages/HomePage';
import DepresionPage from './pages/DepresionPage';
import Inbox from './pages/Inbox';
import Users from './pages/Users';

function App() {
  return (
    <>
      
      <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Inbox' element={<Inbox />}/>
        <Route path='/Users' element={<Users />}/>
        <Route path='/Depresion' element={<DepresionPage/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
