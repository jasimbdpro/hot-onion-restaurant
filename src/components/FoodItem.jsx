import React from 'react';

const FoodItem = (props) => {
    const foods = props.foods;
    // console.log(foods)
    return (
        <div className='col-md-4 d-flex flex-column align-items-center'>
            <img width='200px' src={`/images/${foods.category}/${foods.category}${foods.thumbnails}.png`} alt="" />
            <h2>{foods.nameOfFood}</h2>
        </div>
    );
};

export default FoodItem;