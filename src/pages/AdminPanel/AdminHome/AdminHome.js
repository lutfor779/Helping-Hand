import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const AdminHome = () => {
    return (
        <div>
            <AdminNav />
            <Outlet />
        </div>
    );
};

export default AdminHome;