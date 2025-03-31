import React from "react";
import starbucksLogo from "../../assets/starbuckslogo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import apple from "../../assets/apple-logo.png";
import playstore from "../../assets/playstore.png";
import "./footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="logo">
          <img src={starbucksLogo}></img>
        </div>

        <div className="aboutus">
          <h2>about</h2>
          <p>Our Heritage</p>
          <p>Coffeehouse</p>
          <p>Our Company</p>
        </div>

        <div className="responsibility">
          <h2>responsibility</h2>
          <p>Diversity</p>
          <p>Community</p>
          <p>Ethical Sourcing</p>
          <p>Environmental Stewardship</p>
          <p>Learn More</p>
        </div>

        <div className="quicklinks">
          <h2>Quick Links</h2>
          <p>Privacy Policy</p>
          <p>FAQs</p>
          <p>Customer Service</p>
          <p>Delivery</p>
          <div>
            <p>Loyalty Program Terms and</p>
            <p>Conditions</p>
          </div>
          <p>Beverage Subscription</p>
          <div>
            <p>Starbucks India Mobile App</p>
            <p>Terms of Use</p>
          </div>
          <div>
            <p>Special Discount 25% Off</p>
            <p>Offer</p>
          </div>
        </div>

        <div className="media">
          <div className="socialmedia">
            <h2>SOCIAL MEDIA</h2>
            <div className="media-images">
              <a>
                <img src={instagram}></img>
              </a>
              <a>
                <img src={facebook}></img>
              </a>
              <a>
                <img src={twitter}></img>
              </a>
            </div>
          </div>
          <div className="download">
            <div
              className="apple"
              style={{
                border: "2px solid white",
                borderRadius: "10px",
                backgroundColor: "white",
                color: "black",
              }}
            >
              <img src={apple}></img>
              <div>
                <p>download on the</p>
                <p>App Store</p>
              </div>
            </div>
            <div
              className="playstore"
              style={{
                border: "2px solid white",
                borderRadius: "10px",
                backgroundColor: "white",
                color: "black",
              }}
            >
              <img src={playstore}></img>
              <div>
                <p>GET IT ON</p>
                <p>Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "80%", paddingLeft: "10%" }}>
        <hr />
      </div>

      <div className="bottom">
        <div className="b-left">
          <p>Web Accessiblity</p>

          <p>Privacy Statement</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>

        <div className="b-right">
          <p>© 2025 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
