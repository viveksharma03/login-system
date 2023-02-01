import React from 'react'
import {
    Link,
    useHistory,
    useLocation
} from "react-router-dom";

const Navbar = () => {

    let history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        history.push("/")
    }

    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Login</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                        </li>
                     {/*  <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/link" ? "active" : ""}`} to="/other">Link</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/bharatsharma1909/" target="_blank" rel="noopener noreferrer">Contact Me</a>
    </li>*/}
                    </ul>
                    {!localStorage.getItem("token") ? <form className="d-flex">
                        <Link className="btn btn-outline-primary mx-1" to="/" role="button">Sign In</Link>
                        <Link className="btn btn-outline-primary mx-1" to="/signup" role="button">Sign Up</Link>
                    </form> : <button onClick={handleLogout} className='btn btn-outline-primary mx-1'>Sign Out</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
