import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/pages/Navbar/Navbar';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <div className="">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/dashboard' element={<Dashboard/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
