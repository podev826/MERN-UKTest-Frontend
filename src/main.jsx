import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Admin from "./admin/Admin";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    {/* <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/admin" element={<Admin/>} />
    </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);
