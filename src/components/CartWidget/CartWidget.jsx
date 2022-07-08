import React from "react";
import cartImg from "../../assets/img/cart3.svg"

const CartWidget = () => {
    const amout = 3;
    return (
        <>
          <div className="wrapper me-2 mt-1 cart">
            <a className="text-decoration-none" href="#">
              <span id="cantidadProductos" className="cart-badge">
                {amout}
              </span>
            </a>
            <img style={{ width: 30 }} src={cartImg} alt ="Carrito"/>
          </div>
        </>
      );
    }
    
    export default CartWidget;
    