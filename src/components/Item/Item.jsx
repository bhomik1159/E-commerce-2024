import React from "react";
import "./item.css";

function Item(props) {
    return (
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.brand} {props.name} {props.type}</p>
            <div className="item-prices">
                <div className="item-prices-new">
                ₹{props.new_price}
                </div>
                <div className="item-prices-old">
                ₹{props.old_price}
                </div>
            </div>

        </div>
    );
}
export default Item;