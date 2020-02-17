import React from 'react';
import Photo from '../images/123.jpg';
import CartItems from '../components/CartItems';
import CardManager from '../utilities/CardManager';


export default function Cart() {

	let itemsInLocalStorage = CardManager.getItem();


	return (
		<>
			<div className="container">

				<div className="row p-2 mx-n5 mt-2">
					<h2>Mi Carrito</h2>
				</div>

				{/* Items Container */}
				<div className="container">

					{/* Harcoded card */}
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
								<p>
									$100.000,00
                    			</p>
							</div>
							<div className="col">
								<button className="btn btn-danger">Eliminar</button>
							</div>
						</div >
					</div>

					{/* <CartItems />
					<CartItems /> */}

				</div>
			</div>
		</>
	);
}

