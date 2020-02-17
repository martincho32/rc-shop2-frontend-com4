import React from 'react';
import CartItems from '../components/CartItems';



export default function Cart() {
	return (
		<>
			<div className="container">
				<div className="row p-2 mx-n5 mt-2">
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

