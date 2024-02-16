import React from "react";
import "./offers.css";
import offer_img from "../assets/Screenshot 2024-02-15 122508.png";

function Offers(){
    return(
        <div className="offers">
        <div className="offers-left">
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
        </div>
        <div className="offers-right">
        <img src={offer_img} alt="Offer_img"/>
        </div>
            
        </div>
    )
}
export default Offers;