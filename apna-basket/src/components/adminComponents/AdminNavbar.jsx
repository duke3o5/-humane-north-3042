import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/main_logo.jpg";

export const AdminNavbar = () => {

  const navigate = useNavigate();

  const handlePage=(value)=>{

      navigate(`${value}`)

  }
  return (
    <div className="adminNavbar">
      <div onClick={()=>handlePage('/admin')} style={{cursor: 'pointer'}}>
        <img src={logo} alt="borken logo" />
      </div>
      <div className="navLink">
        <Link to={"./admin"}>
          <p>All Products</p>
        </Link>
        <Link to={"/productForm"}>
          <p>Add Product</p>
        </Link>
        <Link to={"/stats"}>
          <p>Statistics</p>
        </Link>
      </div>
    </div>
  );
};
