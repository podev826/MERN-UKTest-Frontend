import React, { Component } from "react";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navBar";
import auth from "./services/authService";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class AdminLayout extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    console.log('user', user)
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Outlet />
        </main>
      </React.Fragment>
    );
  }
}

export default AdminLayout;
