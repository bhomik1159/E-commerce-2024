import React from "react";
import "./popular.css";
import data_products from "../assets/data";
import Item from "../Item/Item";

function Popular() {
    return (
        <div className="popular">
            <h1>Popular in Women</h1>
            <hr />
            <div className="popular-item">
                {data_products.map((item) => {
                    return <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        brand={item.brand}
                        type={item.type}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}

                    />
                })};
            </div>

        </div>
    );
}
export default Popular;