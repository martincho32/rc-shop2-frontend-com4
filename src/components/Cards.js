import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CardsContainer from './CardsContainer';


export default function Cards(props) {
    return (
        
        <div className="card products-cards m-2 shadow">
            <img src={props.img} className="card-img-top shadow-sm" alt={props.title}></img>
            <div className="card-body">
                <h4 className="card-title price-text">$ {props.price} </h4>
                {/* work in progress section */}
                <div id="hasDiscountDiv">
                    <h6 className="font-italic text-success border-bottom pb-2"> {props.sale.discount} </h6>
                </div>
                {/* work in progress section */}
                <p className="card-text font-weight-light text-truncate "> {props.title + " - " + props.description} </p>
                <div className="card-block text-right shop-btn">
                    <button className=" btn btn-success">Buy</button>
                </div>
            </div>
        </div>
    );
}

