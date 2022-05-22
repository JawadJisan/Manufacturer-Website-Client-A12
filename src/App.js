import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/pages/Navbar/Navbar';
import Dashboard from './components/pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <Navbar/>
     <Routes>
       <Route path='/dashboard' element={<Dashboard/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
