import React from "react";
import "./handCrafted.css";
import bestseller from "../../assets/Bestseller.jpg";
import drinks from "../../assets/Drinks.jpg";
import food from "../../assets/Food.jpg";
import mer from "../../assets/Merchandise.jpg";
import coffee from "../../assets/CoffeeAtHome.jpg";
import ready from "../../assets/ReadyToEat.jpg";
function handCrafted() {
  return (
    <>
      <div className="main">
        <div className="title">
          <h1>Handcrafted Curations</h1>
        </div>

        <div className="items">
          <div className="item">
            <img src={bestseller}></img>
          </div>
          <div className="item">
            <img src={drinks}></img>
          </div>
          <div className="item">
            <img src={food}></img>
          </div>
          <div className="item">
            <img src={mer}></img>
          </div>
          <div className="item">
            <img src={coffee}></img>
          </div>
          <div className="item">
            <img src={ready}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default handCrafted;
