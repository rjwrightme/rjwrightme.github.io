import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="Images/RJ-logo.svg"
              width="40"
              height="40"
              alt="logo"
              loading="lazy"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#aboutMe">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
