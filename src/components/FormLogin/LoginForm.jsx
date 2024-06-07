import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../Input/InputField.jsx";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Error en el inicio de sesión");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      setError("Error al iniciar sesión");
      
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {error && <div className="error">{error}</div>}
      <div className="inputs">
        <InputField
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="mail"
        />
        <InputField
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          icon="lock"
        />
      </div>
      <div className="forgot-password">
        ¿Olvidaste tu contraseña? <span>¡Click aqui!</span>
      </div>
      <div className="submit-container">
        <button type="submit" className="link-login submit">
          Inicia Sesión
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
