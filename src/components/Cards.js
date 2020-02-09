import React from 'react';
import {Link} from 'react-router-dom';


export default function Cards(props) {
    return (
        <div className="card products-cards m-2 shadow">
            <Link to={`/pagedetail/${props._id}`} >
                <img src={props.images[0].path} className="card-img-top shadow-sm" alt={props.images[0].title}
                />
            </Link>
            <div className="card-body">
                <h4 className="card-title price-text">$ {props.price} </h4>
                <h6 className="font-italic text-success border-bottom pb-2"> {props.discountPercentage} </h6>
                <p className="card-text font-weight-light text-truncate"> {props.model + " - " + props.brand} </p>
                <div className="card-block text-right shop-btn">
                    <button className=" btn btn-success px-3">Buy</button>
                </div>
            </div>
        </div>
    );
}
