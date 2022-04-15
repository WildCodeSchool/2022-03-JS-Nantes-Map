import React from "react";
import Agenda from "@pages/Agenda";
import Home from "@pages/Home";
import Citytour from "@pages/Citytour";
import { Route, Routes } from "react-router-dom";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/citytour" element={<Citytour />} />
      </Routes>
    </div>
  );
}
