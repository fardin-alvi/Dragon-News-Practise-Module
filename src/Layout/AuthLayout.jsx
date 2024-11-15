import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';

const AuthLayout = () => {
    return (
        <div className='w-10/12 mx-auto bg-base-100'>
            <header className='pt-10'>
                <Navbar />
            </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;