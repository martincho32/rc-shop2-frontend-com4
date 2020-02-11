import React from 'react';

class Cart extends React.Component {
    render() {
        return (

            <div className="container">
                <section>
                    <div className="container p-2 mb-2">
                        <h2>Mi Carrito</h2>
                    </div>
                    <div className="container">

                    </div>
                </section>
                {/* <div className='container text-center'>
                        <div className="spinner-border d-none my-2" style={{ width: "+ 4rem;", height: "4rem;" }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    {/* <!-- Modal --> 
                    <div className="modal fade" tabindex="-1" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" >Rolling Shop</h5>
                                    <button type="button" className="close btn btn-danger" data-dismiss="modal">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal"
                                    >Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal de Inicio de sesion y creacion de cuenta / Tarea 2 - Header --> 
                <div className="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal modal-dialog-centered" role="document">
                        <div className="modal-content border-0 bg-transparent">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="modal-body">
                                            <div className=" card bg-light">
                                                <article className="card-body mx-auto" style={{ "max-width": "400px;" }}>
                                                    <h4 className="card-title mt-3 text-center">Crear Cuenta</h4>
                                                    <p className="text-center">Empieza con tu cuenta gratuita</p>
                                                    <div className="social-login d-flex justify-content-center">
                                                        <button className="btn m-1 facebook-btn social-btn text-white" type="button">
                                                            <span><i className="fab fa-facebook-f"></i> </span>
                                                        </button>
                                                        <button className="btn m-1 google-btn social-btn text-white" type="button">
                                                            <span><i className="fab fa-google-plus-g"></i></span>
                                                        </button>
                                                    </div>
                                                    <p className="divider-text">
                                                        <span className="bg-light">O</span>
                                                    </p>
                                                    <form>
                                                        <div className="form-group input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-user"></i> </span>
                                                            </div>
                                                            <input name="" className="form-control" placeholder="Nombre" type="text" />
                                                        </div>
                                                        <div className="form-group input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-envelope"></i>
                                                                </span>
                                                            </div>
                                                            <input name="" className="form-control" placeholder="Email" type="email" />
                                                        </div>
                                                        <div className="form-group input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-lock"></i> </span>
                                                            </div>
                                                            <input className="form-control" placeholder="Contraseña" type="password" />
                                                        </div>
                                                        <div className="form-group input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fa fa-lock"></i> </span>
                                                            </div>
                                                            <input className="form-control" placeholder="Repita la Contraseña"
                                                                type="password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn-primary btn-block">
                                                                Crear Cuenta
                                                             </button>
                                                        </div>
                                                    </form>
                                                </article>
                                            </div>
                                            {/*   <!-- card.// --> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal modal-dialog-centered" role="document">
                        <div className="modal-content border-0 bg-transparent">
                            <div className="container">
                                <div className="row">
                                    <div className="col align-self-center">
                                        <div className="modal-body">
                                            <div className="card bg-light">
                                                <article className="card-body mx-auto" style={{ "max-width": "400px;" }}>
                                                    <h4 className="card-title mt-3 text-center">Entra con tu cuenta</h4>
                                                    <p className="text-center">Si ya tienes una cuenta, ingresa aquí</p>
                                                    <div className="social-login d-flex justify-content-center">
                                                        <button className="btn m-1 facebook-btn social-btn text-white" type="button">
                                                            <span><i className="fab fa-facebook-f"></i> </span>
                                                        </button>
                                                        <button className="btn m-1 google-btn social-btn text-white" type="button">
                                                            <span><i className="fab fa-google-plus-g"></i></span>
                                                        </button>
                                                    </div>
                                                    <p className="divider-text">
                                                        <span className="bg-light">O</span>
                                                    </p>
                                                    <form>
                                                        <div className="form-group input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"> <i className="fa fa-envelope"></i>
                                                                </span>
                                                            </div>
                                                            <input name="" className="form-control" placeholder="Email" type="email" />
                                                        </div>
                                                        <div className="form-group input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                                            </div>
                                                            <input className="form-control" placeholder="Contraseña" type="password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn-primary btn-block">
                                                                Entrar
                                                </button>
                                                        </div>
                                                        <p className="text-center">No recuerdas la contraseña? <a href="">Recuperar
                                                    Contraseña </a> </p>
                                                    </form>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
            </div>

        );
    }
}

export default Cart;



