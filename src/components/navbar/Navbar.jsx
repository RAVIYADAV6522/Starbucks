import React from "react";
import "./Navbar.css";
import starbucksLogo from "../../assets/starbuckslogo.png";
import accountLogo from "../../assets/accountlogo.png";
import searchLogo from "../../assets/search.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <a>
            <img src={starbucksLogo}></img>
          </a>
          <ul className="list">
            <li style={{ listStyle: "none" }}>Home</li>
            <li style={{ listStyle: "none" }}>Gift</li>
            <li style={{ listStyle: "none" }}>Order</li>
            <li style={{ listStyle: "none" }}>Pay</li>
            <li style={{ listStyle: "none" }}>Store</li>
          </ul>
        </div>

        <div className="right">
          <div className="logo-input">
            <img style={{ height: "30px" }} src={searchLogo}></img>
            <input
            
              placeholder="Looking for something specific ?"
            ></input>
          </div>

          <img src={accountLogo}></img>
        </div>
      </div>
    </>
  );
}

export {Navbar}; 
