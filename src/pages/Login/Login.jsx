import React from "react";
import LoginHeader from "../../components/LoginHeader/LoginHeader.jsx";
import LoginForm from "../../components/FormLogin/LoginForm.jsx";
import "./Login.css";

const Login = () => (
  <div className="login">
    <div className="container">
      <LoginHeader />
      <LoginForm />
    </div>
  </div>
);

export default Login;
