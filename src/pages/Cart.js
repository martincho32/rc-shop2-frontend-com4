import React, {
	useEffect,
	useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import CartItems from '../components/CartItems';
import CardManager from '../utilities/CartManager';


export default function Cart() {
	const [dbProducts, setDbProducts] = useState([]);
	const history = useHistory();
	let mappedItems = [];

	useEffect(() => {
		getProducts();
	}, []);

	async function getProducts() {
		let itemsInLocalStorage = CardManager.getItem();
		const products = [];
		try {
			for (const item of itemsInLocalStorage) {
				const res = await Axios.get(`/api/products/${item.productID}`);
				products.push(res.data);
			}
			setDbProducts(products)
		} catch (e) {
			console.error(e);
		}
	}

	const clearCartOnClickHandler = () => {
		CardManager.clearCart();
		setDbProducts();
	}

	const removeItem = (p) => {
		CardManager.removeProduct(p);
		const productosActualizados = [];
		for (const i of dbProducts) {
			if (i._id !== p) {
				productosActualizados.push(i);
			}
		};
		setDbProducts(productosActualizados);
	}

	if (dbProducts) {
		mappedItems = dbProducts.map(p => <CartItems removeItem={removeItem} key={p._id} {...p} />)
	}

	// function renderCart() {
	// 	return (
	// 		<div className="border-bottom border-danger text-center p-5 " role="alert">
	// 			<h3> El Carrito esta vacio </h3>
	// 		</div>
	// 	);
	// };


	return (
		<>
			<div className="container">
				<div className="row p-2 mx-n5 mt-2">
					<h2>Mi Carrito</h2>
				</div>
				<div className="container border border-bottom-0">
					{mappedItems}
				</div>
				<div className="row mt-3 justify-content-end">
					<button className="btn btn-primary p-2 mx-2" onClick={() => history.push('/')}>Seguir Comprando</button>
					<button className="btn btn-secondary p-2 mx-2" onClick={clearCartOnClickHandler}>Limpiar Carrito</button>
					<button className="btn btn-success p-2 mx-2">Finalizar Compra</button>
				</div>
			</div>
		</>
	);
}

