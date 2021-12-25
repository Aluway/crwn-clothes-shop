import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import fetchAllClothes from "./store/thunks/fetchAllClothes";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";
import Contacts from "./Pages/Contacts/Contacts";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllClothes());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<Homepage />} exatct path="/" />
          <Route element={<Shop />} path="/shop" />
          <Route element={<Contacts />} path="/contacts" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
