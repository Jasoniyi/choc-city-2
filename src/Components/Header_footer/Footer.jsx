import React from "react";
import { ChocLogo } from "../ui/icons";

const Footer = () => {
  return (
    <footer className="bck-blue">
      <div className="footer_logo mt-2">
        <ChocLogo link="true" linkTo="/" width="150px" height="40px" />
      </div>
      <div className="footer-discl">All rights reserved</div>
    </footer>
  );
};

export default Footer;
