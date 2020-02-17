import React from 'react';
import ShowDiscount from '../utilities/ShowDiscount'
import { Link } from 'react-router-dom';
import Photo from '../images/123.jpg';
import '../components/CartItems.css'

export default function CartItems(props) {

    return (
        < div className="row border-bottom border-danger align-items-center" >
            <Link to={`/pagedetail/${props._id}`} >
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
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </Link>
        </div>
    )
};
