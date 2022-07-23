import React from 'react';
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Item from "./components/Item.jsx";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<ItemListContainer />} />
        <Route path='/nav' element={<NavBar/>} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route
            path="*"
            element={
              <div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>
            }
          />
          <Route path="/CartWidget" element={<div>Cart Page</div>} />

      </Routes>
      <ItemListContainer titulo="Hola Mundo"/>
      <hr/>
      <ItemCount stock={10} initial={1} />
      <ItemDetailContainer />
      </BrowserRouter>

    </div>
  );
}

export default App;
