import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/main_logo.jpg";

export const AdminNavbar = () => {
  return (
    <div className="adminNavbar">
      <div>
        <img src={logo} alt="borken logo" />
      </div>
      <div className="navLink">
        <Link to={"./admin"}><p>All Products</p></Link>
        <Link to={"/productForm"}><p>Add Product</p></Link>
        <Link to={"/stats"}><p>Statics</p></Link>
      </div>
    </div>
  );
};
