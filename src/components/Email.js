import React, { useState } from 'react';
import Axios from 'axios';


export default function Email() {
	const [recipient, setRecipient] = useState('');

	const sendEmail = () => {
		const email = recipient;
		try{
			Axios.post('/email/send-email', {email: email})
			.then(res => console.log(res))
			.catch(err => console.log(err));

		}
		catch (e) {
			console.error("Send Email: " + e);
		}
	}

	const onClickHandler = () => {
		sendEmail();
	}

	const onChangeHandler = (e) => {
		setRecipient(e.target.value)
	}

	return (
		<>
			<div>
				<label >Recibi ofertas y promociones por Email!</label>
				<div className="row">
					<div className="col-9 mr-0 pr-1">
						<input className="form-control"
							type="text"
							placeholder="ingresá tu email..."
							value={recipient}
							onChange={onChangeHandler}
						/>
					</div>
					<div className="col-3 ml-0 pl-0">
						<button onClick={onClickHandler} className="btn btn-danger">Suscribirme!</button>
					</div>
				</div>
			</div>
		</>
	);
}

