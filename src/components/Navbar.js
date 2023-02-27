import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import '../assets/css/nav.css';

const Navbar = () => {
    return ( 
        <>
        <nav>
            <div className="left-nav">
                <img src={logo} alt="" id="nav-logo"/>
                BarberX
            </div>
            <div className="right-nav">
                <a href="/Home">Home</a>
                <a href="">Vission</a>
                <a href="">Mission</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
                <a href="/login">Log in</a>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;