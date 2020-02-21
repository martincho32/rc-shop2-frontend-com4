import React from 'react';
import ShowDiscount from '../utilities/ShowDiscount'
<<<<<<< HEAD
import '../components/CartItems.css'

export default function CartItems(props) {

=======
import { Link } from 'react-router-dom';
import '../components/CartItems.css';
import CardManager from '../utilities/CardManager';
import { useState } from 'react';

export default function CartItems(props) {

    const [inputValue, setinputValue] = useState(CardManager.getQuantityById(props._id));

    const onChangeHandler = (e) => {
        let value = parseInt(e.target.value);
        if(value <= 0) {
            value = 1
        }
        setinputValue(value)
            CardManager.setProductQuantity(props._id, value);
    }


>>>>>>> 7255b1757dd5f254eaaa5961a6159d0d749ca89e
    return (
        < div className="row border-bottom border-danger align-items-center" >
                <div className="col">
                    <img className="thumbnail" src={props.images[0].path} alt={props.images[0].title} />
                </div>
                <div className="col">
                    <p>{props.brand + " - " + props.model}</p>
                </div>
                <div className="col">
                    <input className="form-control" type="number" onChange={ onChangeHandler } value={ inputValue } />
                </div>
                <div className="col">
                    {ShowDiscount(props)}
                </div>
                <div className="col">
                     <button className="btn btn-danger" onClick={()=> props.removeItem(props._id)}>Eliminar</button>
                </div>
        </div>
    )
};
