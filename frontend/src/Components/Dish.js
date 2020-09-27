import React from 'react';

import '../Styles/Dish.css';

const Dish = (props) => {
    return (
        <div className="dish-container">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default Dish;