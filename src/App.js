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

/*  */
import AddReview from '../src/components/pages/Dashboard/User/AddReview'
import MyOrders from '../src/components/pages/Dashboard/User/MyOrders'
import MyProfile from '../src/components/pages/Dashboard/User/MyProfile'
/*  */
import AddProduct from '../src/components/pages/Dashboard/Admin Route/AddProduct'
import MakeAdmin from '../src/components/pages/Dashboard/Admin Route/MakeAdmin'
import ManageOrders from '../src/components/pages/Dashboard/Admin Route/ManageOrders'
import ManageProducts from '../src/components/pages/Dashboard/Admin Route/ManageProducts'


function App() {
  return (
    <div className="">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>

       <Route path='/login' element={<Login/>}></Route>
       {/* <Route path='/purchase' element={<RequireAuth><Purchase/> </RequireAuth> }></Route> */}
       <Route path='/purchase/:partsId' element={<RequireAuth><Purchase/></RequireAuth> }></Route>

    {/* Dashboard */}
    <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
    <Route path='add-review' element={<AddReview/>} />
    <Route path='my-orders' element={<MyOrders/>} />
    <Route path='my-profile' element={<MyProfile/>} />

    {/* admin */}
    <Route path='add-product' element={<AddProduct/>} />
    <Route path='make-admin' element={<MakeAdmin/>} />
    <Route path='manage-orders' element={<ManageOrders/>} />
    <Route path='manage-products' element={<ManageProducts/>} />

    </Route>

       <Route path='*' element={<NotFound/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
