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
                <Link onClick={() => buttonHandler('breakfast')} to='/breakfast' className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow'>Breakfast</Link>
                <Link onClick={() => buttonHandler('lunch')} to='/lunch' className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow'>Lunch</Link>
                <Link onClick={() => buttonHandler('dinner')} to='/dinner' className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow'>Dinner</Link>
            </div>
            <div className=' m-5 row d-flex align-items-center'>
                <div className='col-6'>
                    <h1 className=' fs-1'>{foodItem.nameOfFood}</h1>
                    <p className=' fs-6'>{foodItem.description}</p>
                    <div className=' d-flex'>
                        <p className='fs-2'>${foodItem.price}</p>
                        <p className=' fs-2 bg-danger'> &nbsp;- 1 +</p>
                    </div>
                    <div className="btn btn-primary">Add to Cart</div>
                </div>
                <img className='col-6' src={`/images/${foodItem.category}/${foodItem.category}${foodItem.thumbnails}.png`} alt="" />
            </div>

        </div>
    );
};

export default FoodDetail;