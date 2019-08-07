import React from "react";

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary text-white" id="mainNav">
          <div className="container">
              <a className="navbar-brand js-scroll-trigger text-white" href="/"><h2 className="text-white">Google Books
                  Search</h2></a>
              <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded"
                      type="button" data-toggle="collapse" data-target="#navbarResponsive"
                      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item mx-0 mx-lg-1">
                          <a className="nav-link py-3 px-0 px-lg-3 text-white" href="/">Search Books</a>
                      </li>
                      <li className="nav-item mx-0 mx-lg-1">
                          <a className="nav-link py-3 px-0 px-lg-3 text-white" href="/saved">Saved Books</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}

export default Nav;
