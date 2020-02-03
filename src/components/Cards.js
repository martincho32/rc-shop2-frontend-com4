import React from 'react';

export default function Cards(props) {
    return (
        <div className="card products-cards m-2 shadow">
            <img src={props.images.path} className="card-img-top shadow-sm" alt={props.images.title}></img>
            <div className="card-body">
                <h4 className="card-title price-text">$ {props.price} </h4>
                <h6 className="font-italic text-success border-bottom pb-2"> {props.discountPercentage} </h6>
                <p className="card-text font-weight-light text-truncate"> {props.model + " - " + props.brand} </p>
                <div className="card-block text-right shop-btn">
                    <button className=" btn btn-success">Buy</button>
                </div>
            </div>
        </div>
    );
}
