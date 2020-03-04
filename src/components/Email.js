import React, { useState } from 'react';
import validator from 'email-validator';
import Axios from 'axios';
import './Email.css'


export default function Email() {
	const [recipient, setRecipient] = useState('');

	const sendEmail = () => {
		const input = document.getElementById('inputSub');

		if (validator.validate(recipient)) {
			const email = recipient;
			input.classList.remove('error');
			try {
				Axios.post('/email/send-email', { email: email })
					.then(res => console.log(res))
					.catch(err => console.log(err));

			}
			catch (e) {
				console.error("Send Email: " + e);
			}
		}
		else {
			input.classList.add('error');
		}
	}

	const onClickHandler = () => {
		sendEmail();
		setRecipient('');
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
							id="inputSub"
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

