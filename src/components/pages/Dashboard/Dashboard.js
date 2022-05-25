import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    return (
       <DashboardSidebar>
          <Outlet></Outlet>
       </DashboardSidebar>
    );
};

export default Dashboard;