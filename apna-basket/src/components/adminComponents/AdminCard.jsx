import React from "react";
import "../../Styling/Admin/admin.css";
import { Link } from "react-router-dom";

export const AdminCard = ({
  Image,
  name,
  rating,
  category,
  Price,
  Weight,
  id,
}) => {
  return (
    <div>
      <div className="ProductCard">
        <img src={Image} alt={name} />
        <div className="prodctInsideDiv">
          <h3>{name}</h3>
          <p>
            <span className="spanHeading">Category : </span>
            {category}
          </p>
          <p>
            <span className="spanHeading">Price :</span> {Price} RS.
          </p>
          {Weight && (
            <p>
              <span className="spanHeading"> Weight :</span> {Weight}
            </p>
          )}
          <div className="buttonratingDiv">
            <p>
              <span className="spanHeading">Rating :</span> {rating}
            </p>
            <button>
            <Link to={`/edit/${id}`}>Edit Item</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
