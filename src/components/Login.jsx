/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { userUrl } from "../constants/urls";
import "./Login.css";
import confetti from "canvas-confetti";

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Obtener todos los usuarios desde la API
      const response = await axios.get(userUrl);
      const users = response.data;

      // Validar usuario
      const user = users.find(
        (u) => u.firstName === username && u.code === password
      );

      if (user) {
        onLogin(user); // Asume que la función onLogin ahora maneja el ID del usuario
      } else {
        setError("Invalid username or password");
      }

      confetti();
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("An error occurred while logging in");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="welcome-section">
      <h2>
        ¡Bienvenidos a <br />
        E-<span className="yellow">Demo</span>
        <span className="blue">cra</span>
        <span className="red">cia</span>!
      </h2>
      <p>
        Por favor, <span>inicia sesión</span> para comenzar.
      </p>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          <div className="show-password">
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
