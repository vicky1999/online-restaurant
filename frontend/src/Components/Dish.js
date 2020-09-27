import React from 'react';

import '../Styles/Dish.css';

const Dish = (props) => {
    return (
        <div className="dish-container">
            <h5>{props.name}</h5>
            <div className="descriptions">
                <p className="desc">{props.description}</p>
            </div>
            <p className="cost">&euro; {props.price}</p>
        </div>
    )
}

export default Dish;