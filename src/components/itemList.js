import React from "react";

function itemList(props) {
    console.log("Render itemList", props.item)
    return (
        <>
        <div>itemList</div>
         {
            props.item.map(
                cadaItem => {
                return <div key={cadaItem.sku}>
                <p>{cadaItem.Material}</p>
                <p>{cadaItem.sku}</p>
                <p>{cadaItem.Precio}</p>
                </div>
                }
            )
         }
        </>
       
    );
} 

export default itemList