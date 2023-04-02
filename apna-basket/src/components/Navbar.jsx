import React from "react";
import { FiSearch } from "react-fi";
import {
  MdExpandMore,
  MdOutlineFmdGood,
  MdPersonOutline,
  MdPhone,
} from "react-icons/md";
import { BsTagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cart from "../Images/Cart.png";
import logo from "../Images/main_logo.jpg";
// import offerTag from "../Images/offerTag.png"
import "../style.scss";

export const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="container-top">
        <div className="main-logo">
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="right-top">
          <div className="right-top-login">
            <div className="phone">
              <MdPhone className="phone-icon" />
              <p>1860 123 1000</p>
            </div>
            <div className="address">
              <MdOutlineFmdGood className="location-icon" />
              <p>560004, Bangalore</p>
              <MdExpandMore className="location-arrow-icon" />
            </div>
            <div className="login-signup-main">
              <MdPersonOutline className="user-icon" />
              <Link to={'/login'} style={{ textDecoration: "none", color: "black" }}>
                <p>Login/ Sign Up</p>
              </Link>
            </div>
          </div>
          <div className="search-and-cart">
            <div className="search-box">
              <input type="text" placeholder="Search For Products.." />
              <div className="search-icon-div">
                <FiSearch className="search-icon" />
              </div>
            </div>
            <div className="add-to-cart">
              <Link to={'/cart'} style={{ textDecoration: "none", color: "black" }}>
              <img src={Cart} alt="" />
                <p>
                  <b>M</b>y <b>B</b>asket <br /> <b>0</b> Items
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Nav- Bottom */}
      <div className="container-bottom">
        <Link to={'/products'}>
        <div className="bottom-nav-left">
          <h4>SHOP BY CATEGORY</h4>
          <MdExpandMore className="category-dropdown" />
        </div>
        </Link>
        <div className="bottom-nav-right">
          <BsTagFill className="offer-tag-icon" />
          <p>OFFERS</p>
        </div>
      </div>
    </div>
  );
};
