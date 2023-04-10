
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './pages/Home/HomePage';
import DepresionPage from './pages/DepresionPage';
import LoginPage from './pages/Log/Login';
import Users from './pages/Users';
import PageStyle from './pages/PageStyle';
// import AnsiedadPage from './pages/Ansiedad';


function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/Inbox' element={<PageStyle />}/>
        <Route path='/Users' element={<Users />}/>
        <Route path='/Depresion' element={<DepresionPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        {/* <Route path='/Estres' element={<EstresPage/>}/> */}
      </Routes>
    </div>
    </>
  );
}

export default App;
