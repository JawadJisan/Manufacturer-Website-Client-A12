import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/pages/Navbar/Navbar';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import RequireAuth from './components/pages/Login/RequireAuth';
import Purchase from './components/pages/Purchase/Purchase';
import NotFound from './components/Sheared/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>

       <Route path='/dashboard' element={<Dashboard/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       {/* <Route path='/purchase' element={<RequireAuth><Purchase/> </RequireAuth> }></Route> */}
       <Route path='/purchase/:partsId' element={<RequireAuth><Purchase/></RequireAuth> }></Route>

       <Route path='*' element={<NotFound/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
