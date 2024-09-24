import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const MainNav = () => {
    const [cart, setCart] = useContext(UserContext);
    return (
        <div className=' d-flex justify-content-between m-3 align-items-center'>
            <Link className='m-0 p-0 text-decoration-none' to='/'><img className='w-25 img-fluid' src="/images/logo2.png" alt="" /></Link>
            <div>
                <Link className=' text-decoration-none p-1'><FontAwesomeIcon icon={faCartShopping} />{cart}</Link>
                <Link to='/login' className=' text-decoration-none p-1'>Login</Link>
                <Link to='/signup' className=' text-decoration-none p-1'>Sign up</Link>
            </div>
        </div>
    );
};

export default MainNav;