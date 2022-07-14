import React from 'react';
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer titulo="Hola Mundo"/>
      <hr/>
      <ItemCount stock={10} initial={1} />

    </div>
  );
}

export default App;
