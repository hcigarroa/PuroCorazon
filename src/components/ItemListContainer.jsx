import React, {useState, useEffect } from "react";
import itemList from "./itemList";


function ItemListContainer(props) {
    const ItemDataBase = [
        {
            sku: 5534,
            Material: "Cemento",
            Precio: 750,
            stock: 100,
            img:""
            
            }, {
            sku: 5807,
            Material: "Papel",
            Precio: 150,
            stock: 10,
            img:""
            }, {
            sku: 5798,
            Material: "Papel",
            Precio: 150,
            stock: 10,
            img:""
            }, {
            sku: 5427,
            Material: "Papel",
            Precio: 150,
            stock: 10,
            img:""
            }, {
            sku: 5881,
            Material: "Cemento",
            Precio: 1750,
            stock: 100,
            img:""
            }, {
            sku: 5353,
            Material: "Papel",
            Precio: 150,
            stock: 10,
            img:""
            }, {
            sku: 5579,
            Material: "Cemento",
            Precio: 1850,
            stock: 100,
            img:""
            }, {
            sku: 5505,
            Material: "Madera",
            Precio: 250,
            stock: 50,
            img:""
            }, {
            sku: 5615,
            Material: "Ceramica",
            Precio: 1250,
            stock: 100,
            img:""
            }, {
            sku: 5623,
            Material: "Cemento",
            Precio: 1350,
            stock: 100,
            img:""
        }
    ];
    let [items, setItems] = useState([]);

useEffect(
    () => {
    let promiseItems = new Promise((resolve, reject) => {
        setTimeout(
          () => {
              resolve(ItemDataBase);
          },
        2000);
        });

    promiseItems.then(
      (respuesta) => {
          setItems(ItemDataBase);
        } 
      ).catch(
        (errorMsg) => console.error(errorMsg)
      )
    },
    []
)

    return (
        <itemList items={items}/>
    );
}
export default ItemListContainer;