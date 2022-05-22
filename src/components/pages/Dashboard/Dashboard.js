import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}

                <h1 className='text-3xl text-center'>Welcome to Your Dashboard </h1>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appoinments</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    {
                        // admin && <>
                         <>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/add-doctor'>Add a Doctor</Link></li>
                            <li><Link to='/dashboard/manage-doctor'>Manage Doctor</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;