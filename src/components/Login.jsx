import './Login.css'
import { Link } from "react-router-dom";


function Login() {
    return (
        <div className="login-parent">
            <form className="userInfo">
                <h3>Log In</h3><br/>
                <input type="text" id="Username" placeholder="Username"/><br/><br/>
                <input type="password" id="Password" placeholder="Password"/><br/>
                <button className="login-button" id="Submit">Submit</button>
                <br/>
                <p className="signUpPrompt">No Account? <Link to={`/register`} className="signUpButton">Sign Up</Link>
                </p>
            </form>
        </div>
    )
}

export default Login;
