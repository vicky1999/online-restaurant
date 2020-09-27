import React,{useState} from 'react';
import '../Styles/Dish.css';

import {Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const Dish = (props) => {
    let history = useHistory();
    const [state, setState] = useState({
        name: props.name,
      });
    return (
        <div className="dish-container">
            <h5>{props.name}</h5>
            <div className="descriptions">
                <p className="desc">{props.description}</p>
            </div>
            <p className="cost">&euro; {props.price}</p>
            <Link to='/shop/buy/' onClick={() => {
                localStorage.setItem("name",props.name);
                localStorage.setItem("description",props.description);
                localStorage.setItem("price",props.price);
            }}><Button variant="outline-dark">Buy Now</Button></Link> 
        </div>
    )
}

export default Dish;