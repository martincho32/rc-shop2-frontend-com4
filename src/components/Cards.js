import React from 'react';
import { Link } from 'react-router-dom';
import ShowDiscount from '../utilities/ShowDiscount';
import './Cards.css';


export default function Cards(props) {
    return (
        <div className="card h card-sizing mb-4 ml-3 shadow border-bottom border-danger border-top-0 border-right-0 border-left-0">
            <Link to={`/pagedetail/${props._id}`} >
                <img src={props.images[0].path} className="card-img-top shadow-sm" alt={props.images[0].title} />
                <div className="card-body">
                    {ShowDiscount(props)}
                    <p className="card-text font-weight-light text-truncate text-center">
                        {props.brand + " - " + props.model}
                    </p>
                </div>
            </Link>
        </div>
    );
}

