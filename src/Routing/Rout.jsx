import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../Components/Formpage";
import Preview from "../Components/Preview";

export default function Rout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/preview" element={<Preview/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
