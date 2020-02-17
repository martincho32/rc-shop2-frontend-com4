import React from 'react';
import CartItems from '../components/CartItems';



export default function Cart() {
	return (
		<>
			<div className="container">
				<div className="row p-2 mb-2">
					<h2>Mi Carrito</h2>
				</div>
				<div className="container">

					<CartItems />

					<CartItems />

				</div>
			</div>
		</>
	);
}

