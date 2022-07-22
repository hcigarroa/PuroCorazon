import React from "./item";

const itemList = ({items}) => {
    return (
        <div className="container">
         <div className="row">
          {items.map((cadaItem) => (
             <div key={cadaItem.id} className="col-sm">
                <p>{cadaItem.Material}</p>
                <p>{cadaItem.Precio}</p>
            </div>
            ))}
         </div>
        </div>
       
    );
}; 

export default itemList;