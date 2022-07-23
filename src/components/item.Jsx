import { Link } from "react-router-dom";


const Item = ({ Item }) => {
  const { id, precio, stock, pictureUrl, } = Item;
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{precio}</h5>
        <p className="card-text">{`${stock} units available!`}</p>
        <Link to={`item/${id}`}>
          <button className="btn btn-primary">Mas Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;