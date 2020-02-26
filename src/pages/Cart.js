import React, {
	useEffect,
	useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import CartItems from '../components/CartItems';
import CartManager from '../utilities/CartManager';
import Modal from '../components/Modal';


export default function Cart() {
	const [dbProducts, setDbProducts] = useState([]);
	const [activeSpinner, setActiveSpinner] = useState(false);
	const [random, setRandom] = useState();
	const [showModal, setShowModal] = useState(false);
	const history = useHistory();
	let mappedItems = [];

	useEffect(() => {
		getProducts();
	}, []);

	async function getProducts() {
		let itemsInLocalStorage = CartManager.getItem();
		const products = [];
		try {
			for (const item of itemsInLocalStorage) {
				const res = await Axios.get(`/api/products/${item.productID}`);
				products.push(res.data);
			}
			setDbProducts(products);
		} catch (e) {
			console.error(e);
		}
	}

	const clearCartOnClickHandler = () => {
		CartManager.clearCart();
		setDbProducts();
	}

	const removeItem = (p) => {
		CartManager.removeProduct(p);
		const productosActualizados = [];
		for (const i of dbProducts) {
			if (i._id !== p) {
				productosActualizados.push(i);
			}
		};
		setDbProducts(productosActualizados);
	}

	if (dbProducts) {
		mappedItems = dbProducts.map(p => <CartItems removeItem={removeItem} key={p._id} {...p} />);
	}

	function isCartEmpty() {
		let result = null;
		if (dbProducts === undefined || dbProducts.length === 0) {
			result =
				<div className="border-bottom border-danger text-center p-5 " role="alert">
					<h3> El Carrito esta vacio </h3>
				</div>
				
		} else {
			result = mappedItems;
		}
		return result;
	}

	const getRnd = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const finishPurchaseHandler = () => {
		setActiveSpinner(true);
		let rand = getRnd(0, 1);
		setTimeout(() => {
			setActiveSpinner(false);
			setRandom(rand);
			setShowModal(true);
			setShowModal(false);
		}, 3000);
	}


	return (
		<>
			<div className="container">
				<div className="row p-2 mx-n5 mt-2">
					<h2>Mi Carrito</h2>
				</div>
				<div className="container border border-bottom-0">
					{isCartEmpty()}
				</div>
				<div className={activeSpinner ? "text-center mt-4 d-block" : "text-center mt-4 d-none"}>
					<div className="spinner-grow mt-4" role="status">
						<span className="sr-only">Loading...</span>
					</div>
					<p className="mt-2"> &nbsp;&nbsp; Loading...</p>
				</div>
				<div className="row mt-3 justify-content-end">
					<button className="btn btn-primary p-2  mx-2" onClick={() => history.push('/')}>Seguir Comprando</button>
					<button className="btn btn-secondary p-2 mx-2" onClick={clearCartOnClickHandler}>Limpiar Carrito</button>
					<button onClick={finishPurchaseHandler} className="btn btn-success p-2 mx-2">Finalizar Compra</button>
				</div>
			</div>
			<Modal random={random} showModal={showModal} />
		</>
	);
}

