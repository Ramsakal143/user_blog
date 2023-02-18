import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger fs-2" href="#"> BLOG</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="home" className="text-white fs-5" style={{ textDecoration: "none", paddingLeft: '10px' }}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="create" className="text-white fs-5" style={{ textDecoration: "none", paddingLeft: '10px' }}>Create Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="show " className="text-white fs-5" style={{ textDecoration: "none", paddingLeft: '10px' }}>Show Blog</NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text text-white pe-4">
                            <button className="btn btn-outline-danger me-3">Register</button>
                            <button className="btn btn-outline-danger">Login</button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header