import React, { useState } from "react";
import {default as ItemCount} from "../components/ItemCount"
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail  = ({ item }) => {
  const [amount, setAmount] = useState(0);
  const {precio, stock, material, pictureUrl, id} = item;
  const onAdd = (amount) => {
  setAmount(amount);
  }; 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;

//  const ItemDetail = ({item}) => {
//    const [amount, setAmount] = useState(0);
//   const {precio, stock, material, pictureUrl, id} = item
//    const onAdd = (amount);
//  }; 
//  return (
//      <>
//           <div className="card__item">
//        <div className="card__item-descripion">
//          <h1>{props.data.title}</h1>
//          <img src={props.data.pictureUrl} alt="product img" />
//          <ItemDescriptionContainer item={props.data} key={props.data.is} />
//          <span>Price:${props.data.price} | in stock:{props.data.stock}</span>
//        </div>
//      </div>
//      </>
//    );
//  };

//  export default ItemDetail;
