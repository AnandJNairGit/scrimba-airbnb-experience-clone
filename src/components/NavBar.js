import React from "react";
import logo from "../assets/logo.png";

export default function NavBar() {
    return (<>
    <nav className="nav-bar">
        <img src={logo} className="logo"/>
    </nav>
    </>);
}