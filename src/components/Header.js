import React from "react";
import Logo from "../images/svgs/logo-main.svg";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between md:max-w-screen-lg md:mx-auto px-6 md:px-10 py-4 md:py-6">
        <Logo className="w-10" />
        <ul className="flex">
          <li className="text-white opacity-70 hover:opacity-100 text-lg px-4">
            About
          </li>
          <li className="text-white opacity-70 hover:opacity-100 text-lg px-4">
            Portfolio
          </li>
          <li className="text-white opacity-70 hover:opacity-100 text-lg px-4">
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
