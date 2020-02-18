import React, {
	useEffect,
	useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import CartItems from '../components/CartItems';
import CardManager from '../utilities/CardManager';


export default function Cart() {
	const [dbProducts, setDbProducts] = useState([]);
	let itemsInLocalStorage = CardManager.getItem();
	const history = useHistory();
	let mappedItems = [];
	const products = [];

	async function getProducts() {
		try {
			for (const item of itemsInLocalStorage) {
				const res = await Axios.get(`/api/products/${item.productID}`);
				products.push(res.data);
			}
			setDbProducts(products)
			console.log(products);
		} catch (e) {
			console.error(e);
		}
	}

	useEffect(() => {
		getProducts();
	}, []);

	const clearCartOnClickHandler = () => {
		CardManager.clearCart();
		setDbProducts();
	}

	if(dbProducts) {
		mappedItems = dbProducts.map(p => <CartItems key={p._id} {...p} /> );
	}

	return (
		<>
			<div className="container">
				<div className="row p-2 mx-n5 mt-2">
					<h2>Mi Carrito</h2>
				</div>
				<div className="container border border-bottom-0">
					{ mappedItems  }
				</div>
				<div className="row mt-3 justify-content-end">
					<button className="btn btn-primary p-2 mx-2" onClick={() => history.push('/')}>Seguir Comprando</button>
					<button className="btn btn-secondary p-2 mx-2" onClick={ clearCartOnClickHandler }>Limpiar Carrito</button>
					<button className="btn btn-success p-2 mx-2">Finalizar Compra</button>
				</div>
			</div>
		</>
	);
}

