import React from 'react';
import imgLogo from "../assets/img/logo.png"
import CartWidget from './CartWidget/CartWidget';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
function NavBar() {
    return (
        <><nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img width="100" src={imgLogo} alt="Logo PuroCorazon"/>
                <a className="navbar-brand" href="../secciones/inicio.jsx">Puro Corazón</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="../secciones/inicio.jsx">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../secciones/Nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="../secciones/ceramica/ceramica.jsx">Cerámica</a></li>
                                <li><a className="dropdown-item" href="../secciones/cemento/cemento.jsx">Cemento</a></li>
                                <li><a className="dropdown-item" href="../secciones/madera/madera.jsx">Madéra</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="../secciones/arreglos/arreglos.jsx">Arreglos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <CartWidget />
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav></>
    );
}

export default NavBar;
