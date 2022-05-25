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
import PaymentOrder from './components/pages/Dashboard/User/PaymentOrder';
import RequireAdmin from './components/pages/Login/RequireAdmin';
import MyPortfolio from './components/pages/MyPortfolio/MyPortfolio';
import Footer from './components/pages/Home/Footer';
import Blogs from './components/pages/Blogs/Blogs';

/*  */


function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/myPortfolio' element={<MyPortfolio />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>

          <Route path='/login' element={<Login />}></Route>
          {/* <Route path='/purchase' element={<RequireAuth><Purchase/> </RequireAuth> }></Route> */}
          <Route path='/purchase/:partsId' element={<RequireAuth><Purchase /></RequireAuth>}></Route>

          {/* Dashboard */}
          {/* <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}> */}
          <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
            <Route path='add-review' element={<AddReview />} />
            {/* <Route index element={<MyOrders/>} /> */}
            <Route path='my-orders' element={<MyOrders />} />
            <Route path='my-profile' element={<MyProfile />} />
            <Route path='payment/:id' element={<PaymentOrder />} />

            {/* admin */}
            <Route path='add-product' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
            <Route path='make-admin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
            <Route path='manage-orders' element={<RequireAdmin><ManageOrders /></RequireAdmin>} />
            <Route path='manage-products' element={<RequireAdmin><ManageProducts /></RequireAdmin>} />

          </Route>

          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Navbar>
        <Footer />

    </div>
  );
}

export default App;
