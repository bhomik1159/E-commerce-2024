import React from "react";
import "./hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_img from "../assets/hero_main.png";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Products Only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt="handIcon" />
                    </div>
                    <p>products</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>New Products</div>
                    <img src={arrow_icon} alt="arrow_icon" />
                </div>
            </div>
            <div className="hero-right">
            <img src={hero_img} alt="hero_icon"/>

            </div>
        </div>
    );

}
export default Hero;