/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const FoodDetail = () => {
    const { foodName } = useParams()
    const [foodItem, setFoodItem] = useState({});
    useEffect(() => {
        fetch('/fakedata/fake-data.json')
            .then(response => response.json())
            .then(data => {
                const foundData = data.find(i => i.nameOfFood === foodName);
                setFoodItem(foundData)
            })
    }, [])

    return (
        <div>
            <div className=' d-flex justify-content-center'>
                {/* eslint-disable-next-line no-undef */}
                <Link onClick={() => buttonHandler('breakfast')} to='/breakfast' className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow'>Breakfast</Link>
                {/* eslint-disable-next-line no-undef, no-undef, no-undef */}
                <Link onClick={() => buttonHandler('lunch')} to='/lunch' className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow'>Lunch</Link>
                <Link onClick={() => buttonHandler('dinner')} to='/dinner' className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow'>Dinner</Link>
            </div>
            <div className=' m-5 row d-flex align-items-center'>
                <div className='col-6'>
                    <h1 className=' fs-1'>{foodItem.nameOfFood}</h1>
                    <p className=' fs-6'>{foodItem.description}</p>
                    <div className=' d-flex'>
                        <p className='fs-1'>${foodItem.price}</p>
                        <p className=' fs-3 bg-secondary text-white rounded-3 px-2 mx-3'>
                            <span className=' px-2 rounded-1' >-</span> 1 <span className=' px-2 rounded-1' >+</span>
                        </p>
                    </div>
                    <div className="btn btn-primary"><FontAwesomeIcon icon={faCartShopping} /> &nbsp;Add</div>
                </div>
                <img className='col-6' src={`/images/${foodItem.category}/${foodItem.category}${foodItem.thumbnails}.png`} alt="" />
            </div>

        </div>
    );
};

export default FoodDetail;