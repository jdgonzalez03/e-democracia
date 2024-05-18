/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Voting } from "./components/Voting";
import { Login } from "./components/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUser(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser("");
  };

  return (
    <div>
      <div>
        <nav>
          <ul>
            {!isAuthenticated ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/voting">Voting</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/about"
            element={
              isAuthenticated ? <About /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/voting"
            element={
              isAuthenticated ? <Voting /> : <Login onLogin={handleLogin} />
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
