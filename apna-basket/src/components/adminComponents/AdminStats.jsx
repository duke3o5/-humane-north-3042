import React, { useEffect } from "react";
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
    <div>
      <h1 className="statHeading">Products Statistics</h1>

      {/* <div className="prodStat">
        <h3>
          Number of Food items in stock : <span>{Food.length}</span> -{" "}
          <span>
            In Percentage:{" "}
            {Math.ceil( (Food.length*100)/
              (Dairy.length + Food.length + Products.length)
            )}
          </span>
          %
        </h3>
        <h3>
          Number of Vegetables in stock: <span>{Products.length}</span> -{" "}
          <span>
            In Percentage:{" "}
            {Math.ceil((Products.length*100)/
              (Dairy.length + Food.length + Products.length)
            )}
          </span>
          %
        </h3>
        <h3>
          Number of Dairy products in stock: <span>{Dairy.length}</span> -{" "}
          <span>
            In Percentage:{" "}
            {Math.ceil(( Dairy.length*100)/
              (Dairy.length + Food.length + Products.length)
            )}
          </span>
          %
        </h3>
      </div> */}

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
  );
};
