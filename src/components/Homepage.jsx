import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodItem from './FoodItem';
import MainHeader from './MainHeader';

const Homepage = () => {
    const [cart, setCart] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [category, setCategory] = useState('lunch');
    useEffect(() => {
        fetch('/fakedata/fake-data.json')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.filter(i => i.category === category);
                setFoodItem(filteredData)
            })
    }, [category])

    const buttonHandler = (category) => {
        setCategory(category);
    };
    return (
        <div>
            <MainHeader />
            <div className=' d-flex justify-content-center'>
                <Link onClick={() => buttonHandler('breakfast')} to='/breakfast' className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow'>Breakfast</Link>
                <Link onClick={() => buttonHandler('lunch')} to='/lunch' className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow'>Lunch</Link>
                <Link onClick={() => buttonHandler('dinner')} to='/dinner' className=' text-decoration-none px-3 py-1 rounded m-3 border-1 shadow'>Dinner</Link>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    foodItem.map((i, index) => <FoodItem key={index} foods={i} />)
                }

            </div>
            <div className=' text-center mt-5'><button className='btn btn-secondary'>Check Out Your Food</button></div>
        </div>
    );
};

export default Homepage;