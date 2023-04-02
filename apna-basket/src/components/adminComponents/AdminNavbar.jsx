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
     
      <div className="navLink">
        <Link to={"/admin"}>
          <p>Products</p>
        </Link>
        <Link to={"/productForm"}>
          <p>Add New</p>
        </Link>
        <Link to={"/stats"}>
          <p>Inventory</p>
        </Link>
      </div>
    </div>
  );
};
