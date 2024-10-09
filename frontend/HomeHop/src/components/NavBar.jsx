import logo from "../assets/photos/homehope-logo.png"
import './NavBar.css'

function NavBar () {
    return (
        <nav className = "nav-item"> 
            <img src = {logo} className = "logo"/>
        </nav>
    )
}

export default NavBar;