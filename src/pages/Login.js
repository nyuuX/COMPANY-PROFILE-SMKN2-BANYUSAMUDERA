import { Link } from "react-router-dom";
import '../assets/css/login.css';
import logo from '../assets/logo.png';

const Login = () => {
    return ( 
        <>
        <div className="logo-wrapper">
            <div className="login-box">
                <div id="logo">
                    <img src={logo} alt="" />
                </div>
                <h1>Sign in</h1>
                <div className="input-area">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <Link to='/home'><button type="submit" id="submit-btn">Submit</button></Link>
                </div>
                <div className="sign-up"><span>Don't have an account? </span><Link to='/register'><span>Sign up</span></Link></div>
            </div>
        </div>
        </>
     );
}
 
export default Login;