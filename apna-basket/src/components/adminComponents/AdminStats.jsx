import React, { useEffect } from "react";
import { AdminNavbar } from "./AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import {
  adminAllDairy,
  adminAllFood,
  adminAllProducts,
} from "../../Redux/AdminReducer/action";

export const AdminStats = () => {
  const dispatch = useDispatch();
  const { Dairy, Food, Products } = useSelector((store) => store.AdminReducer);

  // console.log(Dairy, Food, Products);

  useEffect(() => {
    dispatch(adminAllDairy);
    dispatch(adminAllFood);
    dispatch(adminAllProducts);
  }, []);
  return (
    <>
    <AdminNavbar/>
    <div>
      <h1 className="statHeading">Inventory Statistics</h1>

      <table className="statsTable">
        <tr>
          <th>Items</th>
          <th>Quantity</th>
          <th>Percentage</th>
        </tr>
        <tr>
          <td>Vegetables</td>
          <td>{Products.length}</td>
          <td>
            {" "}
            {Math.ceil(
              (Products.length * 100) /
                (Dairy.length + Food.length + Products.length)
            )}
            %
          </td>
        </tr>
        <tr>
          <td>Food</td>
          <td>{Food.length}</td>
          <td>
            {Math.ceil(
              (Food.length * 100) /
                (Dairy.length + Food.length + Products.length)
            )}%
          </td>
        </tr>
        <tr>
          <td>Dairy</td>
          <td>{Dairy.length}</td>
          <td>
            {Math.ceil(
              (Dairy.length * 100) /
                (Dairy.length + Food.length + Products.length)
            )}%
          </td>
        </tr>
      </table>
    </div>
    </>
  );
};
