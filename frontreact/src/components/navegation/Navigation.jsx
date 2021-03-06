import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navigation extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Navbar</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Home

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/edit/:id">Editar Invitados</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/create">Agregar Invitados</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/list">List</Link>
                  </li>


                </ul>

              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
