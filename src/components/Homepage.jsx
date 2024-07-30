import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodItem from './FoodItem';

const Homepage = () => {
    const [foodItem, setFoodItem] = useState([]);
    useEffect(() => {
        fetch('/fakedata/fake-data.json')
            .then(response => response.json())
            .then(data => {
                setFoodItem(data);
            })
    }, [])
    // console.log(foodItem)
    return (
        <div>
            <div className=' d-flex justify-content-center'>
                <Link className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow' to=''>Breakfast</Link>
                <Link className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow' to=''>Lunch</Link>
                <Link className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow' to=''>Dinner</Link>
            </div>
            <div className='row'>
                {
                    foodItem.map(i => <FoodItem foods={i} />)
                }
            </div>
        </div>
    );
};

export default Homepage;