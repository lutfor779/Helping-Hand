import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import AdminNav from '../AdminNav/AdminNav';

const AdminHome = () => {
    return (
        <div>
            <AdminNav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default AdminHome;