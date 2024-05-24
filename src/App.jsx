/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Voting } from "./components/Voting";
import { Login } from "./components/Login";
import "./App.css";
import { VotingResults } from "./components/VotingResult";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (userObject) => {
    setIsAuthenticated(true);
    setUser(userObject);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser({});
  };

  return (
    <>
      <header>
        <div className="container-navbar">
          <p className="logo">
            E-<span className="yellow yellow-animation">Demo</span>
            <span className="blue blue-animation">cra</span>
            <span className="red red-animation">cia</span>
          </p>
          <nav>
            <ul>
              {!isAuthenticated ? (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/">Principal</Link>
                  </li>
                  <li>
                    <Link to="/about">Acerca</Link>
                  </li>
                  <li>
                    <Link to="/voting">Votaciones</Link>
                  </li>
                  <li>
                    <Link to="/result">Resultados</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/result"
          element={
            isAuthenticated ? (
              <VotingResults />
            ) : (
              <Login onLogin={handleLogin} />
            )
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
            isAuthenticated ? (
              <Voting user={user} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </>
  );
};

export default App;
