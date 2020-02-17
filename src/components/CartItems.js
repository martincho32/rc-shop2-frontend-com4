import React from 'react';
import Photo from '../images/123.jpg';

export default function CartItems() {

    return (

        <div className="">
            < div className="row border-bottom border-danger align-items-center" >
                <div className="col">
                    <img style={{ width: "150px", height: "150px" }} src={Photo} />
                </div>
                <div className="col">
                    <p>Celular</p>
                </div>
                <div className="col">
                    <input className="form-control" type="number" />
                </div>
                <div className="col">
                    <div>
                        $100.000,00
                    </div>
                </div>
                <div className="col">
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </div >
        </div>
    )
};
