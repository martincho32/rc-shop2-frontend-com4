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

        this.setState({ goToSearchPage: true });
        // console.log(this.props);
        // window.location=`/search?${this.props.location.search}`;
        // this.props.history.push(`/search`);
    }

    render() {
        let result = null;
        if (this.state.goToSearchPage) {
            result = <Redirect to={`/search?brand=${this.state.inputValue}`} />;
            this.setState({ goToSearchPage: false });
        } else {
            result = <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                        <Link to="/">
                            <img src={RollingLogo} width="70" height="70" alt="alternative" />
                            <div className="navbar-brand">Rolling Shop</div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#top" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Electronica</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/section/smart">Smart TV</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/section/celulares">Celulares</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/section/cargadores">Cargadores</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/section/notebooks">Notebooks</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/section/tablets">Tablets</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#top" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Electrodomesticos</a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/section/heladeras">Heladeras</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/section/lavarropas">Lavarropas</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/section/aires">Aires Acondicionados</Link>
                                    </div>
                                </li>
                            </ul>
                            <Link to="/login" className="font-weight-bold">
                                <div className="d-flex flex-column">
                                    <i class="fas fa-sign-in-alt mx-auto"></i>
                                    Loguearse
                                </div>
                            </Link>
                            <Link to="/register" className="mx-4 font-weight-bold">
                                <div className="d-flex flex-column">
                                    <i class="fas fa-user-plus mx-auto"></i>
                                    Registrarse
                                </div>                                    
                            </Link>
                            <form className="form-inline my-2 my-lg-0">
                                <input onChange={(e) => this.setState({ inputValue: e.target.value })} value={this.state.inputValue} className="form-control mr-sm-2" type="search" name="brand" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.onClickHandler} type="submit">Search</button>
                            </form>
                            <Link to="/Cart">
                                <img src={CartLogo} style={{ padding: "10px" }} width="50px" height="50px" alt="alternative" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        }
        return (
            <>{result}</>

        );
    }
}


export default Navbar;