import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
