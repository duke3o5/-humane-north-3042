import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-cont">
        <div>
          <h6>bigbasket</h6>
          <p>About Us</p>
          <p>In News</p>
          <p>Green bigbasket</p>
          <p>Privacy Policy</p>
          <p>Affiliate</p>
          <p>Terms and Conditions</p>
          <p>Careers At bigbasket</p>
          <p>bb Instant</p>
          <p>bb Daily</p>
          <p>bb Blog</p>
          <p>bbnow</p>
        </div>
        <div>
          <h6>Help</h6>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>bb Wallet FAQs</p>
          <p>bb Wallet T&Cs</p>
          <p>Vendor Connect</p>
        </div>
        <div>
          <h6>Download Our App</h6>
          <div className="playstore-apps">
            <Link>
              <img
                src="https://www.bbassets.com/static/v2653/custPage/build/content/img/Google-App-store-icon.png"
                alt=""
              />
            </Link>
          </div>
          <div className="playstore-apps">
            <Link>
              <img
                src="https://www.bbassets.com/static/v2653/custPage/build/content/img/Apple-App-store-icon.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div>
          <h6>Get Social With Us</h6>
          <div className="social">
            <div className="facebook">
              <BsFacebook className="facebook-icon" />
            </div>
            <div className="pintrest">
              <BsPinterest className="pintrest-icon" />
            </div>
            <div className="twitter">
              <BsTwitter className="twitter-icon" />
            </div>
            <div className="instagram">
              <BsInstagram className="instagram-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
