import React, { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Tests from "./components/tests";
import TestForm from "./components/testForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class App extends Component {
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
          <Routes>
            <Route path="/admin/login" element = {<LoginForm/>} />
            <Route path="/admin/logout" element = {<Logout/>} />
            <Route path="/admin/tests/:id" element = {<TestForm/>} />
            <Route path="/admin/tests"  element = {<Tests/>} />
            <Route path="/admin/not-found" element = {<NotFound/>} />
            <Route path="/admin/" element = {<Navigate to="/admin/tests" />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
