import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import styled from "styled-components";
import "../../Styling/Admin/admin.css";
import { useDispatch, useSelector } from "react-redux";
import { AdminUpdateItem, deleteAdminItem } from "../../Redux/AdminReducer/action";

export const AdminEditProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Products, isLoading, isError } = useSelector(
    (store) => store.AdminReducer
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AdminUpdateItem(data, id)).then(() => {
      setSuccess(true);
    });
  };

  const handleDelete = (id) => {
    // navigate(`${value}`);
    dispatch(deleteAdminItem(id)).then(() => {
        navigate("/admin")
      });
  };

  useEffect(() => {
    const data = Products.find((el) => el.id == id);
    // console.log(data);
    setData(data);
  }, []);

  return (

    <>
     <h1 style={{ marginBottom: "2%"}}>
          Update item to see changes on admin side
        </h1>
    <div className="editProductBox">
      {/* first div */}

      <div className="editViewProduct">
        <div className="editItemImage">
          <img src={data.Image} alt={data.name} />
        </div>

        <div className="prodctInsideDiv">
          <h3>{data.name}</h3>
          <p>
            <span className="spanHeading">Category : </span>
            {data.category}
          </p>
          <p>
            <span className="spanHeading">Price :</span> {data.Price} RS.
          </p>
          {data.Weight && (
            <p>
              <span className="spanHeading"> Weight :</span> {data.Weight}
            </p>
          )}
          <p>
            <span className="spanHeading">Rating :</span> {data.rating}
          </p>
          <button onClick={() => handleDelete(data.id)}>Delete Item</button>
        </div>
      </div>

      {/* second div */}
      <div className="handleForm">
        <h3 style={{ marginBottom: "2%", fontSize: "20px",textAlign: "center", color: "#84c225", fontWeight: "500px" }}>{success && "Data updated"}</h3>

        <form onSubmit={handleSubmit}>
          <h1 style={{ marginBottom: "2%" }}>Selected Item : {data.name}</h1>

          <input
            type="text"
            name="Image"
            value={data.Image}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="Price"
            value={data.Price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={data.category}
            onChange={handleChange}
          />
          {data.Weight && (
            <input
              type="text"
              name="Weight"
              value={data.Weight}
              onChange={handleChange}
            />
          )}
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
    </>

  );
};

// const DIV = styled.div`
//   width: 40%;
//   margin: auto;
//   form {
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     text-align: center;
//     align-items: center;
//     border: 1px solid grey;
//     padding: 20px;
//   }
//   input {
//     width: 90%;
//     height: 40px;
//     font-size: large;
//   }
//   button {
//     width: 30%;
//     height: 35px;
//   }
// `;
