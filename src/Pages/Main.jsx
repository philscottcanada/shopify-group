import React from "react";
import {Link} from 'react-router-dom';
import "./Main.scss";
import NavLeft from "../components/NavLeft/NavLeft";
import NavRight from "../components/NavRight/NavRight";
import text from "../assets/text.png";
import comp1 from "../assets/SetupStore.png";
import comp2 from "../assets/PaymentSetUp.png";
import comp3 from "../assets/Support.png";
import comp4 from "../assets/Apps.png";
function Main() {
  return (
    <div className="main">
      {/* <NavLeft /> */}
      <div className="main__wrapper">
        <img src={text} alt="text" className="main__text" />
        <div className="main__one">
          <Link to="/store"><img className="main__comp1" src={comp1} alt="1" /></Link>
          <img className="main__comp2" src={comp2} alt="2" />
        </div>
        <div className="main__two">
          <img className="main__comp3" src={comp3} alt="3" />
          <img className="main__comp4" src={comp4} alt="4" />
        </div>
      </div>
      {/* <NavRight /> */}
    </div>
  );
}

export default Main;
