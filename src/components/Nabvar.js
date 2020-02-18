import React from 'react';
import RollingLogo from '../images/carrito.png';
import CartLogo from '../images/carro.png';
import { Link, Redirect } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            goToSearchPage: false,
            inputValue: ""
        }
    }

    onClickHandler = () => {

        this.setState({ goToSearchPage: true});
        // console.log(this.props);
        // window.location=`/search?${this.props.location.search}`;
        // this.props.history.push(`/search`);
    }

    render() {
        let result = null;
        if(this.state.goToSearchPage) {
            result = <Redirect to={`/search?brand=${this.state.inputValue}`} />;
            this.setState({ goToSearchPage: false});
        } else {
            result = <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                    <Link to="/">
                        <img src={RollingLogo} width="70" height="70" />
                        <a className="navbar-brand" href="#">Rolling Shop</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TV, Audio y Video </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/section/smart tv">Smart TV</Link>
                                    <Link className="dropdown-item" to="/section/full hd">Full HD</Link>
                                    <Link className="dropdown-item" to="/section/tv por marcas">TV por marcas</Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Ver Mas</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Celulares,Tablets y Notebooks </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/section/celulares liberados">Celulares Liberados</Link>
                                    <Link className="dropdown-item" to="/section/cargadores portatiles">Cargadores Portatiles</Link>
                                    <Link className="dropdown-item" to="/section/notebooks">Notebooks</Link>
                                    <Link className="dropdown-item" to="/section/tablets">Tablets</Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Ver Mas</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Electrodomesticos y Accesorios </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/section/heladeras con freezer">Heladeras con Freezer</Link>
                                    <Link className="dropdown-item" to="/section/lavarropas automaticos">Lavarropas Automaticos</Link>
                                    <Link className="dropdown-item" to="/section/aires">Aires Acondicionados</Link>
                                    <Link className="dropdown-item" to="/section/splits">Splits</Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Ver Mas</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input onChange={ (e) => this.setState({ inputValue: e.target.value}) } value={this.state.inputValue} className="form-control mr-sm-2" type="search" name="brand" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" onClick= { this.onClickHandler } type="submit">Search</button>
                        </form>
                        <Link to="/Cart">
                            <img src={CartLogo} style={{ padding: "10px" }} width="50px" height="50px" />
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
        }
        return (
            <>{ result }</>
            
        );
    }
}


export default Navbar;