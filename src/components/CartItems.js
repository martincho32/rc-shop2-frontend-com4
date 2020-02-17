import React from 'react';
import ShowDiscount from '../utilities/ShowDiscount'
import Photo from '../images/123.jpg';
import '../components/CartItems.css'

export default function CartItems(props) {

    return (
        <div className="">
            < div className="row border-bottom border-danger align-items-center" >
                <div className="col">
                    <img className="thumbnail" src={/*props.images[0].path*/ Photo} />
                </div>
                <div className="col">
                    <p>{/*props.brand + " - " + props.model*/} Celular</p>
                </div>
                <div className="col">
                    <input className="form-control" type="number" />
                </div>
                <div className="col">
                    {/*ShowDiscount(props)*/} $ 100.000,00
                </div>
                <div className="col">
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </div >
        </div>
    )
};
