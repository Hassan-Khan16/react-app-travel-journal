import React from "react"
import earthlogo from "../images/earth-logo.png"

function Navbar() {
    return (
        <nav className="nav">
            <img src={earthlogo} className="nav-image" alt="" />
            <h1>my travel journal.</h1>
        </nav>
    )
}
export default Navbar