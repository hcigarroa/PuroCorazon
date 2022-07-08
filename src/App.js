import React from 'react';
import "./App.css";
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount"
import 'bootstrap';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <hr/>
      <ItemCount />

    </>
  );
}

export default App;
