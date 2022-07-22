import React, {useState, useEffect } from "react";
import itemList from "./itemList";
import data from "./utils/data.json"
import Item from "./item";


const ItemListContainer = () => {
    const [items, setItems] = useState = ([]);
useEffect(() => {
 setItems(data);
}, []);
return (
  <>
    <div className="mt-5"><itemList items={items} />
    </div>
  </>
);
};

export default ItemListContainer;