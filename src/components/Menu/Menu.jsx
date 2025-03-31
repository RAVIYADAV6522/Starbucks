import React from "react";
import bestseller from "../../assets/Bestseller.jpg";
import "./Menu.css";

function Menu() {
  return (
    <>
      <div className="barista-parent">
       
          <div className="barista-card">
            <h1>Barista Recommends</h1>
            <div className="card">
              <div className="card-top">
                <img src={bestseller}></img>
                <div className="card-top-right">
                  <h3>java Chip</h3>
                  <h3>Frappuchino</h3>
                  <p>TALL(345ml). 392 kcal</p>
                </div>
              </div>
              <div className="card-bottom">
                <p>$420</p>
                <div>Add Item</div>
              </div>
            </div>
          </div>

          <div className="Menu">
            <a style={{ color: "blue" }}>View Menu</a>
          </div>
       
      </div>
    </>
  );
}

export default Menu;
