import Item from "./Item.jsx";

const ItemList = ({ items }) => {
    return (
        <div className="container">
         <div className="row">
          {items.map((item) => (
             <div key={Item.id} className="col-sm">
                <p>{item.Material}</p>
                <p>{item.Precio}</p>
                <Item item={item} />
            </div>
            ))}
        </div>
        </div>
    );
}; 

export default ItemList;