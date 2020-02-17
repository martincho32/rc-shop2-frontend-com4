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

				<div className="container border border-bottom-0">

					<CartItems />

					<CartItems />

				</div>

				<div className="row mt-3 justify-content-end">
					<button className="btn btn-primary p-2 mx-2">Seguir Comprando</button>
					<button className="btn btn-secondary p-2 mx-2">Limpiar Carrito</button>
					<button className="btn btn-success p-2 mx-2">Finalizar Compra</button>
				</div>
			</div>
		</>
	);
}

