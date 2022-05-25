// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, Outlet } from 'react-router-dom';
// import auth from '../../../firebase.init';
// import useAdmin from '../../Hooks/useAdmin';

// const Dashboard = () => {
//     const [user] = useAuthState(auth);
//     const [admin] = useAdmin(user);
//     return (
//         <div class="drawer drawer-mobile ">
//             <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
//             <div class="drawer-content flex flex-col items-center justify-center">
//                 {/* <!-- Page content here --> */}

//                 <Outlet></Outlet>

//             </div>
//             <div class="drawer-side">
//                 <label for="my-drawer-2" class="drawer-overlay"></label>
//                 <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
//                     {/* <!-- Sidebar content here --> */}
                    
//                     { user && !admin &&
//                         <> 
//                     <li><Link to='/dashboard/add-review'>Add Review</Link></li>
//                     <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
//                     <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
//                         </>
//                     }

//                     {
//                         admin &&
//                         <>
//                             <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
//                             <li><Link to='/dashboard/add-product'>Add Product</Link></li>
//                             <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>
//                             <li><Link to='/dashboard/manage-orders'>Manage Orders</Link></li>
//                             <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>
//                         </>
//                     }
//                 </ul>

//             </div>
//         </div>
//     );
// };

// export default Dashboard;