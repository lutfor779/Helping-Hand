import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    let location = useLocation();


    if (isLoading) { return <h1>Loading</h1> }

    if (user?.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;