import React from "react";
import Logo from "../images/svgs/logo-main.svg";
import Twitter from "../images/svgs/twitter.svg";
import Github from "../images/svgs/github.svg";
import LinkedIn from "../images/svgs/linked-in.svg";
import Email from "../images/svgs/email.svg";
import Curve from "../images/svgs/curve.svg";

const Footer = () => {
  return (
    <>
      <Curve className="footer-curve transform-gpu rotate-180 -mb-1" />
      <footer>
        <div className="py-8 flex flex-col">
          <Logo className="w-14 mx-auto mb-20" />
          <div className="flex mx-auto">
            <Github className="w-8 mx-6 opacity-50 hover:opacity-100" />
            <LinkedIn className="w-8 mx-6 opacity-50 hover:opacity-100" />
            <Twitter className="w-8 mx-6 opacity-50 hover:opacity-100" />
            <Email className="w-8 mx-6 opacity-50 hover:opacity-100" />
          </div>
          <div className="text-gray-200 text-lg text-center mt-10 opacity-50">
            Crafted by me &copy; {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
