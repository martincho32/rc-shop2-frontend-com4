import React from 'react';
import RollingLogo from '../images/carrito.png';
import Email from './Email';

class Footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid p-5 mt-4 bg-light">
                <div>
                    <br />
                    <span><b>RollingShop</b></span>
                    <a href="#top">
                        <img src={RollingLogo} width="70" height="70" alt="carrito de compra" />
                    </a>
                </div>
                <div className="row">
                    <div className="col-md col-sm-4">
                        <b>Información</b>
                        <ul className="list-unstyled">
                            <li><a href="#top">Contactos</a></li>
                            <li><a href="#top">Envios y devoluciones</a></li>
                            <li><a href="#top">Condiciones Generales</a></li>
                            <li><a href="#top">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    <div className="col-md col-sm-4">
                        <b>Sobre Nosotros</b>
                        <ul className="list-unstyled">
                            <li><a href="#top">Quienes Somos</a></li>
                            <li><a href="#top">Contactanos</a></li>
                            <li><a href="#top">Aviso Legal</a></li>
                            <li><a href="#top">Politica de Privacidad</a></li>
                            <li><a href="#top">Politica de Cookies</a></li>
                        </ul>
                    </div>
                    <div className="col-md col-sm-4">
                        <b>Cuenta</b>
                        <ul className="list-unstyled">
                            <li><a href="#top">Mi Cuenta</a></li>
                            <li><a href="#top">Mis Pedidos</a></li>
                            <li><a href="#top">Mis Datos</a></li>
                            <li><a href="#top">Mis Direcciones</a></li>
                        </ul>
                    </div>
                    <div className="col-md col-sm-4">
                        <b>Contactos</b>
                        <ul className="list-unstyled" >
                            <li><a href="#top">Direccion:Gral Paz N° 577</a></li>
                            <li><a href="#top">Estacionamiento Propio</a></li>
                            <li><a href="#top">Horario de atencion de Lunes a Viernes</a></li>
                            <li><a href="#top">WhatsApp: 03813011110</a></li>
                            <li><a href="#top">email:ecommerce@rolling.com</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <Email />
                    </div>
                </div >
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

            </footer >
        );
    }
}
export default Footer;
