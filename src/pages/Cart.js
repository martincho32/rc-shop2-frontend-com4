import React, {
	useEffect,
	useState
} from 'react';
import Axios from 'axios';
import CartItems from '../components/CartItems';
import CardManager from '../utilities/CardManager';


export default function Cart() {
	const [dbProducts, setDbProducts] = useState([]);
	const products = dbProducts;
	let mappedProducts = [];

	let itemsInLocalStorage = CardManager.getItem();

	useEffect(() => {
		
		itemsInLocalStorage.forEach(i => {
			try {
				let res = Axios.get(`/api/products/:${i.productID}`);
				console.log(res);
				setDbProducts(res.data)
			} catch (e) {
				console.error(e);
			}
		});

	}, []);

	if (products) {
		mappedProducts = products.map(p => <CartItems key={p.id} {...p} />)
	}

	return (
		<>
			<div className="container">
				<div className="row p-2 mx-n5 mt-2">
					<h2>Mi Carrito</h2>
				</div>
				<div className="container border border-bottom-0">
					{mappedProducts}
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

