import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <div className=' d-flex justify-content-between m-3 align-items-center'>
            <img className='w-25 img-fluid' src="images/logo2.png" alt="" />
            <div>
                <Link className=' text-decoration-none p-1'>Login</Link>
                <Link className=' text-decoration-none p-1'>Sign up</Link>
            </div>
        </div>
    );
};

export default MainNav;