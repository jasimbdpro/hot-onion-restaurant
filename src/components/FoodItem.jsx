import React from 'react';
import { Link } from 'react-router-dom'

const FoodItem = (props) => {
    const foods = props.foods;
    // console.log(foods)
    return (
        <div className="col d-flex">
            <Link to={`/food/${foods.nameOfFood}`} className="card flex-fill hover-animation text-decoration-none px-3 mx-3">
                <img src={`/images/${foods.category}/${foods.category}${foods.thumbnails}.png`} className=" card-img-top mt-5" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {foods.nameOfFood}</h5>
                    <p className="card-text"> {foods.description} </p>
                    <p className='card-footer'>Price: {foods.price}</p>
                </div>
            </Link>
        </div>
    );
};

export default FoodItem;