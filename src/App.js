import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import fetchAllClothes from "./store/thunks/fetchAllClothes";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";
import Contacts from "./Pages/Contacts/Contacts";
import Catalog from "./Pages/Catalog/Catalog";

import "./App.scss";
import Checkout from "./Pages/Checkout/Checkout";
import { YMaps } from "react-yandex-maps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllClothes());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <YMaps preload>
        <div className="App">
          <Navbar />
          <Routes>
            <Route element={<Homepage />} exact path="/" />
            <Route element={<Shop />} path="/shop" />
            <Route element={<Contacts />} path="/contacts" />
            <Route element={<Catalog />} path="/shop/:directoryName" />
            <Route element={<Checkout />} exact path="/checkout" />
          </Routes>
        </div>
      </YMaps>
    </BrowserRouter>
  );
}

export default App;
