import React from 'react';

export default function ShowDiscount (props) {

    if (props.discountPercentage > 0) {
        let newPrice = props.price - (props.price * props.discountPercentage) / 100
        return (
            <div>
                <h3 className="text-center">${newPrice}</h3>
                <h5 className="text-center">
                    <strike className="text-muted pr-3">${props.price}</strike>
                    <span className="text-success">{props.discountPercentage}%Off</span>
                </h5>
            </div>
        );
    } else {
        return (
            <h3 className="text-center">${props.price}</h3>
        );
    }
};
