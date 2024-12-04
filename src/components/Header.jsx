import './Header.css'
import logo from '../assets/321 Movies Logo.png'
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className='header'>
            <div className="logo">
                <Link to={`/`}>
                    <img id="logo" src={logo}/>
                </Link>
            </div>
            <div className="search">
                <input id="search" type="text" placeholder="Search"></input>
            </div>
            <div className="pages">
                <Link to={`/movie`} className="button" id="button-1" href="#">Movies</Link>
                <Link to={`/login`} className="button" id="button-2" href="#">Login</Link>
            </div>
        </div>
    )
}

export default Header