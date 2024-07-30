import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <div className=' d-flex justify-content-between m-3 align-items-center'>
            <Link className='m-0 p-0 text-decoration-none' to='/'><img className='w-25 img-fluid' src="/images/logo2.png" alt="" /></Link>
            <div>
                <Link className=' text-decoration-none p-1'>Login</Link>
                <Link className=' text-decoration-none p-1'>Sign up</Link>
            </div>
        </div>
    );
};

export default MainNav;