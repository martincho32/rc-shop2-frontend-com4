import React from 'react';
import ShowDiscount from '../utilities/ShowDiscount'
import { Link } from 'react-router-dom';
import '../components/CartItems.css';
import CartManager from '../utilities/CartManager';
import { useState } from 'react';

export default function CartItems(props) {

    const [inputValue, setinputValue] = useState(CartManager.getQuantityById(props._id));

    const onChangeHandler = (e) => {
        let value = parseInt(e.target.value);
        if (value <= 0) {
            value = 1
        }
        setinputValue(value)
        CartManager.setProductQuantity(props._id, value);
    }


    return (
        <div className="row border-bottom border-danger align-items-center py-2" >
            <Link to={`/pagedetail/${props._id}`} className="col">
                <img className="thumbnail" src={props.images[0].path} alt={props.images[0].title} />
            </Link>
            <Link to={`/pagedetail/${props._id}`} className="col">
                <p>{props.brand + " - " + props.model}</p>
            </Link>
            <div className="col">
                <input className="form-control" type="number" onChange={onChangeHandler} value={inputValue} />
            </div>
            <div className="col">
                {ShowDiscount(props)}
            </div>
            <div className="col">
                <button className="btn btn-danger" onClick={() => props.removeItem(props._id)}>Eliminar</button>
            </div>
        </div>
    )
};
