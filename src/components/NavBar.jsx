import React from 'react';
import imgLogo from "../assets/img/logo.png";
function NavBar(){
    return(
    <nav>
        <img width="120" src={imgLogo} alt="Logo Tienda"/>
        <h2>Puro Corazón</h2>
        <h3>Artesania Contemporánea</h3>   
        <ul>
            <li>
                <a href="/">Inicio</a>
                <a href="/">Nosotros</a>
                <a href="/">Productos</a>
                <a href="/">Contacto</a>
            </li>
        </ul>
        
    </nav>
    )
}



export default NavBar;