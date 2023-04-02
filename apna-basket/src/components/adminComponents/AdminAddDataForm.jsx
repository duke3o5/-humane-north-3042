import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AdminNavbar } from "./AdminNavbar";
import { postAdminData } from "../../Redux/AdminReducer/action";
import "../../Styling/Admin/admin.css";

const init = {
  image: "",
  name: "",
  rating: "",
  category: "",
  price: 0,
};

export const AdminAddDataForm = () => {
  const [data, setData] = useState(init);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });

    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data);
    dispatch(postAdminData(data));
    // console.log(data);
  };

  return (
    <>
      <AdminNavbar/>
    <div className="adminForm">
      <form className="form" onSubmit={handleSubmit}>
      <h1 className="formHeading">Add Product</h1>

        <div>
          <input
            type="text"
            placeholder="Item Image"
            name="image"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Add Item Name"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Add Product Rating"
            name="rating"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            text="text"
            placeholder="Add Product Category"
            name="category"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            text="text"
            placeholder="Add Product Price"
            name="price"
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">List Item</button>
        </div>
      </form>
    </div>
    </>

  );
};
