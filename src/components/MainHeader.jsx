import React from 'react';

const MainHeader = () => {
    return (
        <div className='main-header d-flex flex-column justify-content-center align-items-center'>
            <h2 className='mb-4'>Best food waiting for your belly </h2>
            <div className=' d-flex justify-content-center align-items-center'>
                <input className=' rounded-5 border-0 shadow py-2 px-5' type="text" />
                <input className=' rounded-5 ms-n4 px-3 shadow border-0 bg-primary text-white py-2  px-5' type="button" value="Search" />
            </div>
        </div>
    );
};

export default MainHeader;