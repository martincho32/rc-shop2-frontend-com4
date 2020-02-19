import React, { useState } from 'react';
import Axios from 'axios';


export default function Email() {
	const [recipient, setRecipient] = useState();

	const sendEmail = () => {
		const email = recipient;
		try{
		// 	Axios.post(`/send-email?recipient=${email}`) //query string url

		// fetch(`/send-email?recipient=${email.recipient}`)
		// 	.catch(err => console.error(err))
		
		}
		catch (e) {
			console.error("Send Email: " + e);
		}
	}

	const onClickHandler = () => {
		sendEmail();
	}

	const onchangeHandler = (e) => {
		setRecipient(e.target.value)
	}

	return (
		<>
			<form >
				<label >Recibi ofertas y promociones por Email!</label>
				<div className="row">
					<div className="col-9 mr-0 pr-1">
						<input className="form-control"
							type="text"
							placeholder="ingresá tu email..."
							value={recipient}
							onChange={onchangeHandler}
						/>
					</div>
					<div className="col-3 ml-0 pl-0">
						<button onClick={onClickHandler} className="btn btn-danger">Suscribirme!</button>
					</div>
				</div>
			</form>
		</>
	);
}

