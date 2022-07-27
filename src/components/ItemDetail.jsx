import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate, Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [amount, setAmount] = useState(0);
  const { id, precio, stock, pictureUrl, material} = item;
  const onAdd = (amount) => {
    const navigate = useNavigate();
    setAmount(amount);
    navigate("/cart");
  }; 
    return (
      <div className="card__item">
        <img className="card-img-top" src={pictureUrl} alt="card image cap" />
      <div className="card__item-descripion">
        <h5 className="card-title">{id}</h5>
        <p className="card-text">{material}</p>
        <p className="card-text">{precio}</p>
      </div>
  
      {amount == 0 ? (
        <ItemCount stock={stock} initial={0} onAdd={onAdd} />
      ) : (
        <h1>{amount} Productos a comprar</h1>
      )}
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-warning">Go to checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;