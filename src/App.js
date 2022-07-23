import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Item from "./components/Item";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<ItemListContainer />} />
        <Route path='/nav' element={<NavBar/>} />
        <Route path="Item/:id" element={<ItemDetailContainer />} />
        <Route
            path="*"
            element={
              <div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>
            }
          />
          {/* <Route path="/CartWidget" element={<div>Cart Page</div>} /> */}
          <Route path="cart" element={<div>Cart Page</div>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
