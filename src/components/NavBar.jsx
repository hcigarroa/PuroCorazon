import imgLogo from "../assets/img/logo.png"
import CartWidget from './CartWidget/CartWidget';
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img width="100" src={imgLogo} alt="Logo PuroCorazon"/>
                <Link className="navbar-brand" to={"/"}>Puro Corazón</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href=""><Link to={"/Inicio"}>Inicio</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href=""><Link to={"/Nosotros"}>Nosotros</Link></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href=""><Link to={"productos/Ceramica"}>Ceramica</Link></a></li>
                                <li><a className="dropdown-item" href=""><Link to={"productos/Cemento"}>Cemento</Link></a></li>
                                <li><a className="dropdown-item" href=""><Link to={"productos/Madera"}>Madéra</Link></a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href=""><Link to={"productos/Arreglos"}>Arreglos</Link></a></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <CartWidget />
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
        </>
    );
}

export default NavBar;
