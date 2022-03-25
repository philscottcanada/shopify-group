import './StoreSetup.scss'
import back_button from '../../assets/Back_Button.png'
import card from '../../assets/Card.png'

function StoreSetup(){
    return(
        <div className='setup'>
            <h1 className='setup__title'>Wilkommen Hanna! Let's get you started!</h1>
            <ul className='setup__menu'>
                <li><img className='setup__back-button' src={back_button} alt='Chevron button back to previous page'  /></li>
                <li><h2>Store Setup</h2></li>
            </ul>
            <img className='setup__card' src={card} alt='Customize your theme card' />
        </div>
    )
}
export default StoreSetup