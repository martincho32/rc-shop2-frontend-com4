import React from 'react';
import RollingLogo from '../images/carrito.png';

class Footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid p-2 mt-4 bg-light">
                <div>
                    <br />
                    <span><b>RollingShop</b></span>
                    <a href="#">
                        <img src={RollingLogo} width="70" height="70" alt="carrito de compra" />
                    </a>
                </div>
                {/* <div className="main-footer container"> */}
                <div className="row">
                    <div className="col-md col-sm-4">
                        <b>Información</b>
                        <ul className="list-unstyled">
                            <li><a href="#">Contactos</a></li>
                            <li><a href="#">Envios y devoluciones</a></li>
                            <li><a href="#">Condiciones Generales</a></li>
                            <li><a href="#">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    <div className="col-md col-sm-4">
                        <b>Sobre Nosotros</b>
                        <ul className="list-unstyled">
                            <li><a href="#">Quienes Somos</a></li>
                            <li><a href="#">Contactanos</a></li>
                            <li><a href="#">Aviso Legal</a></li>
                            <li><a href="#">Politica de Privacidad</a></li>
                            <li><a href="#">Politica de Cookies</a></li>
                        </ul>
                    </div>
                    <div className="col-md col-sm-4">
                        <b>Cuenta</b>
                        <ul className="list-unstyled">
                            <li><a href="#">Mi Cuenta</a></li>
                            <li><a href="#">Mis Pedidos</a></li>
                            <li><a href="#">Mis Datos</a></li>
                            <li><a href="#">Mis Direcciones</a></li>
                        </ul>
                    </div>
                    <div className="col-md col-sm-4">
                        <b>Contactos</b>
                        <ul className="list-unstyled" >
                            <li><a href="#">Direccion:Gral Paz N° 577</a></li>
                            <li><a href="#">Estacionamiento Propio</a></li>
                            <li><a href="#">Horario de atencion de Lunes a Viernes</a></li>
                            <li><a href="#">WhatsApp: 03813011110</a></li>
                            <li><a href="#">email:ecommerce@rolling.com</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div>
                       <p>Copyright 2001-2018 | Todos los derechos reservados RollingShop.com. RollingShop S.A.C.I. e I.
                        Valentín Gómez
                        2813 (1191) | Capital Federal | Argentina

                        Las fotos son a modo ilustrativo. La venta de cualquiera de los productos publicados está sujeta a
                        la
                        verificación de stock. Los precios online y los planes de financiación para los productos
                        presentados/publicados en www.rollingshop.com.ar y/o www.rollingshop.com son válidos exclusivamente
                        para la
                        compra vía internet en las páginas antes mencionadas. Las especificaciones técnicas y descripciones
                        están sujetas a cambios sin previo aviso.</p>
                </div>
                {/* </div> */}
            </footer>
        );
    }
}
export default Footer;
