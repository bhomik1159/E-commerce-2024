import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menu, setMenu] = useState("Shop");
    return (
        <div className="navbar-container">
            <ul>
                <li onClick={() => (setMenu("Shop"))}><Link style={{textDecoration: 'none'}} to="/" >Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
                <li onClick={() => (setMenu("Skin Care"))}><Link style={{textDecoration: 'none'}}to="skincare" >Skin Care</Link>{menu === "Skin Care" ? <hr /> : <></>}</li>
                <li onClick={() => (setMenu("MakeUp"))}><Link style={{textDecoration: 'none'}}to="makeup" >MakeUp</Link>{menu === "MakeUp" ? <hr /> : <></>}</li>
                <li onClick={() => (setMenu("About Us"))}><Link style={{textDecoration: 'none'}}to="aboutus" >About Us</Link>{menu === "About Us" ? <hr /> : <></>}</li>
            </ul>
            <h1>CARES</h1>
            <div className="search-box">
                <ul>
                    <li><Link style={{textDecoration: 'none'}}to="login"><button>login</button></Link></li>
                    <li><Link style={{textDecoration: 'none'}}to="cart"><button>cart</button></Link></li>
                </ul>
            </div>

        </div>
    );
}
export default Navbar;