import React from 'react';
import ShowDiscount from '../utilities/ShowDiscount'
import { Link } from 'react-router-dom';
import '../components/CartItems.css'
import CardManager from '../utilities/CardManager';

export default function CartItems(props) {

    // deleteitemOnClickHandler = (prop) => {
    //     CardManager.removeProduct(prop._id);
    // };

    return (
        < div className="row border-bottom border-danger align-items-center" >
                <div className="col">
                    <img className="thumbnail" src={props.images[0].path} alt={props.images[0].title} />
                </div>
                <div className="col">
                    <p>{props.brand + " - " + props.model}</p>
                </div>
                <div className="col">
                    <input className="form-control" type="number" />
                </div>
                <div className="col">
                    {ShowDiscount(props)}
                </div>
                <div className="col">
                     <button className="btn btn-danger" >Eliminar</button>
                </div>
        </div>
    )
};
