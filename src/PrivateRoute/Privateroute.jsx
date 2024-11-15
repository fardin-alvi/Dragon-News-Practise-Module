import React, { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation()
    console.log(location);
    if (loading) {
        <div className='flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default Privateroute;