import './StoreSetup.scss'
import back_button from '../../assets/Back_Button.png'
import card from '../../assets/Card.png'
import text from "../../assets/text.png";

function StoreSetup(){
    return (
      <div className="setup">
        <img src={text} alt="text" className="setup__text" />
        <ul className="setup__menu">
          <li>
            <img
              className="setup__back-button"
              src={back_button}
              alt="Chevron button back to previous page"
            />
          </li>
          <li>
            <p className="setup__store">Store Setup</p>
          </li>
        </ul>
        <img
          className="setup__card"
          src={card}
          alt="Customize your theme card"
        />
      </div>
    );
}
export default StoreSetup