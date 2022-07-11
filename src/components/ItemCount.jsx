import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function ItemCount() {
    const [count, setCount] = useState(1);

function handleAdd(){
    if(count < props,stock){
        setCount(count + 1)};

    
}

function handleSubstaract(){
    setCount(count - 1)
}

function handlebuy (){
}

    return (
        <div class="container px-5 py-8 mx-auto">
            <div class="flex flex-col text-center w-ful mb-12">
                <h1 class="sm:text-3x1 text-2x1 font-bold title-font mb-4">Compra tus Productos</h1>
                <div>
                    <div>
                    <button onClick={handleSubstaract}>-</button>
                    <span>   {count}   </span>
                    <button onClick={handleAdd}>+</button>
                    </div>
                    <div>
                        <button onClick={handlebuy}>Agrega al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCount