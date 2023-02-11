import { Routes, Route, json, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
// import "./index.css";
import "./default.css";
import "./css/font-awesome.css";

function AppLayout() {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
