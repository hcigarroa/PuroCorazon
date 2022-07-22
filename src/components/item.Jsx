import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({ item }) => {
  const { id, precio, stock, pictureUrl, } = item;
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} units available!`}</p>
        <Link to={`item/${id}`}>
          <button className="btn btn-primary">Mas Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default item;

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Id</Card.Title>
//         <Card.Text>
//           Producto
//         </Card.Text>
//         <Button variant="primary">Agregar al Carro</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;