import React from 'react';
import Nabvar from './Nabvar';
import Footer from './Footer';
import RollingLogo from '../images/carrito.png'
class Cart extends React.Component {
    render() {
        return (
            <div>
                    <div class="container">
                        <section id="cart_button">
                            <div class="container p-2 mb-2">
                                <h2>Mi Carrito</h2>
                            </div>
                            <div id="Products-Render" class="container">

                            </div>
                        </section>
                        <div class='container text-center'>
                            <div class="spinner-border d-none my-2" style="width: 4rem; height: 4rem;" id="spinner" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Rolling Shop</h5>
                                        <button type="button" class="close btn btn-danger" data-dismiss="modal">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body" id="modal-msg">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal"
                                            onclick="view.goPage();">Aceptar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Modal de Inicio de sesion y creacion de cuenta / Tarea 2 - Header --> */}
                    <div class="modal fade" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal modal-dialog-centered" role="document">
                            <div class="modal-content border-0 bg-transparent">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="modal-body">
                                                <div class=" card bg-light">
                                                    <article class="card-body mx-auto" style="max-width: 400px;">
                                                        <h4 class="card-title mt-3 text-center">Crear Cuenta</h4>
                                                        <p class="text-center">Empieza con tu cuenta gratuita</p>
                                                        <div class="social-login d-flex justify-content-center">
                                                            <button class="btn m-1 facebook-btn social-btn text-white" type="button">
                                                                <span><i class="fab fa-facebook-f"></i> </span>
                                                            </button>
                                                            <button class="btn m-1 google-btn social-btn text-white" type="button">
                                                                <span><i class="fab fa-google-plus-g"></i></span>
                                                            </button>
                                                        </div>
                                                        <p class="divider-text">
                                                            <span class="bg-light">O</span>
                                                        </p>
                                                        <form>
                                                            <div class="form-group input-group">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text">
                                                                        <i class="fa fa-user"></i> </span>
                                                                </div>
                                                                <input name="" class="form-control" placeholder="Nombre" type="text" />
                                                            </div>
                                                            <div class="form-group input-group">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text">
                                                                        <i class="fa fa-envelope"></i>
                                                                    </span>
                                                                </div>
                                                                <input name="" class="form-control" placeholder="Email" type="email" />
                                                            </div>
                                                            <div class="form-group input-group">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text">
                                                                        <i class="fa fa-lock"></i> </span>
                                                                </div>
                                                                <input class="form-control" placeholder="Contraseña" type="password" />
                                                            </div>
                                                            <div class="form-group input-group">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text">
                                                                        <i class="fa fa-lock"></i> </span>
                                                                </div>
                                                                <input class="form-control" placeholder="Repita la Contraseña"
                                                                    type="password" />
                                                            </div>
                                                            <div class="form-group">
                                                                <button type="submit" class="btn btn-primary btn-block">
                                                                    Crear Cuenta
                                                </button>
                                                            </div>
                                                        </form>
                                                    </article>
                                                </div>
                                                {/*   <!-- card.// --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- Fin Modal de Inicio de sesion y creacion de cuenta / Tarea 2 - Header -->
    </div>
                    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal modal-dialog-centered" role="document">
                            <div class="modal-content border-0 bg-transparent">
                                <div class="container">
                                    <div class="row">
                                        <div class="col align-self-center">
                                            <div class="modal-body">
                                                <div class="card bg-light">
                                                    <article class="card-body mx-auto" style="max-width: 400px;">
                                                        <h4 class="card-title mt-3 text-center">Entra con tu cuenta</h4>
                                                        <p class="text-center">Si ya tienes una cuenta, ingresa aquí</p>
                                                        <div class="social-login d-flex justify-content-center">
                                                            <button class="btn m-1 facebook-btn social-btn text-white" type="button">
                                                                <span><i class="fab fa-facebook-f"></i> </span>
                                                            </button>
                                                            <button class="btn m-1 google-btn social-btn text-white" type="button">
                                                                <span><i class="fab fa-google-plus-g"></i></span>
                                                            </button>
                                                        </div>
                                                        <p class="divider-text">
                                                            <span class="bg-light">O</span>
                                                        </p>
                                                        <form>
                                                            <div class="form-group input-group">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text"> <i class="fa fa-envelope"></i>
                                                                    </span>
                                                                </div>
                                                                <input name="" class="form-control" placeholder="Email" type="email" />
                                                            </div>
                                                            <div class="form-group input-group">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                                                </div>
                                                                <input class="form-control" placeholder="Contraseña" type="password" />
                                                            </div>
                                                            <div class="form-group">
                                                                <button type="submit" class="btn btn-primary btn-block">
                                                                    Entrar
                                                </button>
                                                            </div>
                                                            <p class="text-center">No recuerdas la contraseña? <a href="">Recuperar
                                                    Contraseña </a> </p>
                                                        </form>
                                                    </article>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
            </div >
    );
    }
}

export default Cart;



