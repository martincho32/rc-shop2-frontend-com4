import React, { useRef,useEffect } from 'react';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD
import CartManager from '../utilities/CartManager';
=======
import CardManager from '../utilities/CardManager';
>>>>>>> 664e550c6828336ca1a74e703f0faa1b8f76102f


function Modal(props) {
    const refModal = useRef();
    const history = useHistory();

    useEffect(() => {
        // console.log(refModal.current);
        if(props.showModal) {
            $(refModal.current).modal('show');
        }        
    }, [props.showModal, props.random])

    const randomMessage = () => {
        if(props.random === 1) {
            return (
                <p>La compra se realizó con éxito</p>
            )
        } else {
            return (
                <p>Hubo un problema con su compra, por favor intente de nuevo en uns minutos</p>
            );
        };
    }

    const onClickHandler = () => {
        if (props.random === 1) {
            history.push('/');
<<<<<<< HEAD
            CartManager.clearCart();
=======
            CardManager.clearCart();
>>>>>>> 664e550c6828336ca1a74e703f0faa1b8f76102f
        }
    };

    return(
        // Modal
<<<<<<< HEAD
        <div data-show="true" ref={ refModal } className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
=======
        <div data-show="true" ref={ refModal } className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
>>>>>>> 664e550c6828336ca1a74e703f0faa1b8f76102f
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Rolling Shop</h5>
                        <button type="button" className="close btn btn-danger" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" id="modal-msg">
                        {randomMessage()}
                    </div>
                    <div className="modal-footer">
                        <button onClick={ onClickHandler } type="button" className="btn btn-danger" data-dismiss="modal">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;