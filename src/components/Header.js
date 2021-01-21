import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <Link to="/">
            <img
              src="Images/RJ-logo.svg"
              width="40"
              height="40"
              alt="logo"
              loading="lazy"
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <HashLink to="/#aboutMe">About</HashLink>
              </li>
              <li className="nav-item">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
