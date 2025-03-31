import React from "react";
import more from "../../assets/more.jpg";
import "./More.css";
function More() {
  return (
    <>
      <div className="more-parent">
        <div className="more-left">
          <h2>Learn more about the world of coffee!</h2>
          <div className="bgimg">
            <img src={more}></img>
          </div>
          <div className="imgdata">
            <div className="coffeebox">Coffee Culture</div>
            <div className="bghead">
              <p style={{ color: "white", fontSize: "30px" }}>
                Art & Science of coffee brewing
              </p>
              <p style={{ color: "white" }}>
                Master the perfect brew with starbucks! Learn the Art and
                Science of coffee brewing
              </p>
            </div>

            <div className="lm">Learn More</div>
          </div>
        </div>

        <div className="more-right">
          <a>Discover More</a>
        </div>
      </div>
    </>
  );
}

export default More;
