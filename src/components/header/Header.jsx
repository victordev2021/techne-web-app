import React from "react";
import "./header.scss";
import CTA from "./CTA";
import ME from "../../assets/img/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>
          Hello if (condition) {} else {}'am!
        </h5>
        <h1>Victor Avalos</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};
export default Header;
