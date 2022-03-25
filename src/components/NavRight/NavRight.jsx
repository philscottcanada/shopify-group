import React from "react";
import "./NavRight.scss";
import navRight from "../../assets/NavRight-inner.png";
import button from "../../assets/Button.png";
import buttonRight from "../../assets/button-right.png";

function NavRight() {
  return (
    <div className="navRight">
      <img src={navRight} alt="navright" className="navRight__one" />
      <div className="navRight__two">
        <img src={button} alt="button" className="navRight__two__button" />
        <img
          src={buttonRight}
          alt="right"
          className="navRight__two__buttontwo"
        />
      </div>
    </div>
  );
}

export default NavRight;
