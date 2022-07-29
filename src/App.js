import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Item from "./components/Item";
import CartProvider from "./context/cartContext";

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/nav' element={<NavBar/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="detalle/:detalleid" element={<ItemDetailContainer />} />
        <Route
            path="*"
            element={
              <div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>
            }
          />
          {/* <Route path="/CartWidget" element={<div>Cart Page</div>} /> */}
          <Route path="cart" element={<div>Cart Page</div>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
