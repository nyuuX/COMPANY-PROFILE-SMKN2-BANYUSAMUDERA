import { Link } from "react-router-dom";
import '../assets/css/login.css';
import logo from '../assets/logo.png';

const Register = () => {
    return ( 
        <>
        <div className="logo-wrapper">
            <div className="login-box">
                <div id="logo">
                    <img src={logo} alt="" />
                </div>
                <h1>Sign up</h1>
                <div className="input-area">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <Link to='/login'><button type="submit" id="submit-btn">Submit</button></Link>
                </div>
                <div className="sign-up"><span>Already have an account? </span><Link to='/login'><span>Sign in</span></Link></div>
            </div>
        </div></>
     );
}
 
export default Register;