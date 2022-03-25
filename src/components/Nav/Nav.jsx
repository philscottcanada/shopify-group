import './Nav.scss';
import logo from '../../assets/Inner.png'
import search from '../../assets/Search.png'
import User from '../../assets/User.png'

function Nav(){
    return(
        <ul className='Nav'>
            <li><img className='Nav__logo' src={logo} alt="Apparel By logo" /></li>
            <li><img className='Nav__search' src={search} alt="Search Navigation Bar" /></li>
            <li><img className='Nav__avatar' src={User} alt="User Avatar and Name" /></li>
        </ul>
    )
}
export default Nav