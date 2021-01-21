import React from "react";

const Footer = () => {
  return (
    <footer>
      <img
        className="footerLogo"
        src="Images/RJ-logo.svg"
        width="40"
        height="40"
        alt="logo"
        loading="lazy"
      />
      <div>Made by me &copy; {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
