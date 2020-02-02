import React from 'react';

export default function Price (props) {
    return (
        <>
            <div id="hasDiscountDiv">
                <h6 className="font-italic text-success border-bottom pb-2"> {props.sale.discount} </h6>
            </div>
        </>
    );
}