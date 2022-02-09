import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          GUEST App
        </Link>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/"
                class="btn btn-outline-primary"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/list"
                class="btn btn-outline-primary"
              >
                List Guest
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/add"
                class="btn btn-outline-primary"
              >
                Add Guest
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                class="btn btn-outline-primary"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navegacion;
