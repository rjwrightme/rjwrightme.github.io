import React from "react";
import Logo from "../images/svgs/logo-main.svg";

const Header = () => {
  return (
    <header className="px-6 md:px-10 py-4 md:py-6 md:max-w-screen-lg md:mx-auto flex items-center justify-between">
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
    </header>
  );
};

export default Header;
