import React, {useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import detailledItems from "./utils/details.json"
import Spinner from "./Spinner";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const Promise = new Promise((resolve, reject) =>{
    setTimeout(() => resolve(detailledItems), 2000);
  });


useEffect(() => {
    setLoading(true);
    Promise.then((response) => {
      const foundItem = response.filter((item) => item.id == params.id);
      setItem(foundItem[0]);
      setLoading(false);
    });
  }, []);
    return loading ? <Spinner /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;