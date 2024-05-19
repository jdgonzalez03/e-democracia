/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { userUrl } from "../constants/urls";

export const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("An error occurred while logging in");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
