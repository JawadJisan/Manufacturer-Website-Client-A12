import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/pages/Navbar/Navbar';

function App() {
  return (
    <div className="">
      <Navbar/>
     <Routes>
       <Route path=''></Route>
     </Routes>

    </div>
  );
}

export default App;
