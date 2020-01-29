import React from 'react';
import RollingLogo from './images/carrito.png';


function Navbar(){
    return(
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
             <img src={RollingLogo} width="70" height="70"/>
             <a class="navbar-brand" href="#">Rolling Shop</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      TV, Audio y Video
                     </a>
                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                         <a className="dropdown-item" href="#">Smart TV</a>
                         <a className="dropdown-item" href="#">Full HD</a>
                         <a className="dropdown-item" href="#">TV por marcas</a>
                         <div className="dropdown-divider"></div>
                         <a className="dropdown-item" href="#">Ver Mas</a>
                     </div>
                 </li>
                 <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Celulares,Tablets y Notebooks
                     </a>
                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                         <a className="dropdown-item" href="#">Celulares Liberados</a>
                         <a className="dropdown-item" href="#">Cargadores Portatiles</a>
                         <a className="dropdown-item" href="#">Notebooks</a>
                         <a className="dropdown-item" href="#">Tablets</a>
                         <div className="dropdown-divider"></div>
                         <a className="dropdown-item" href="#">Ver Mas</a>
                      </div>
                 </li>
                 <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Electrodomesticos y Accesorios
                     </a>
                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                         <a className="dropdown-item" href="#">Heladeras con Freezer</a>
                         <a className="dropdown-item" href="#">Lavarropas Automaticos</a>
                         <a className="dropdown-item" href="#">Aires Acondicionados</a>
                         <a className="dropdown-item" href="#">Splits</a>
                         <div className="dropdown-divider"></div>
                         <a className="dropdown-item" href="#">Ver Mas</a>
                     </div>
                  </li>
      
                </ul>
                   <form className="form-inline my-2 my-lg-0">
                       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                   </form>
            </div>
            </nav>
            </div>
        </div>
    );
}

export default Navbar;