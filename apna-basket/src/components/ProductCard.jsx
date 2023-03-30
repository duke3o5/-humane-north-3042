import React from "react";
import van from "../assets/delivery-van.png";
import basket from "../assets/tool.png";

// {
//   "id": 2,
//   "rating": 3,
//   "name": "Potato",
//   "Image": "https://www.bigbasket.com/media/uploads/p/s/40162469_6-fresho-potato-new-crop.jpg",
//   "category": "Organic",
//   "Price": 84.5,
//   "CartQuantity": 0
//   },

export const ProductCard = () => {
  return (
    <div style={{ width: "210px", border: "1px solid gainsboro" }}>
      <img
        src="https://www.bigbasket.com/media/uploads/p/s/40162469_6-fresho-potato-new-crop.jpg"
        style={{ margin: "auto" }}
        alt=""
      />
      <div style={{ padding: "15px" }}>
        <p style={{ textAlign: "left", color: "red", fontSize: "11px" }}>
          Organic
        </p>
        <p style={{ textAlign: "left", fontSize: "14px" }}>Potato</p>
        <input
          disabled
          placeholder="  500 g - Rs 18.50                   ▼"
          style={{
            border: "1px solid gainsboro",
            width: "104%",
            height: "22px",
            marginTop: "30px",
            marginLeft: "-3px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "gray",
            cursor: "pointer",
          }}
        ></input>
        <div>
          <p style={{ textAlign: "left" }}>
            <del style={{ color: "gray", fontSize: "10px" }}>
              MRP : Rs. 31.50
            </del>{" "}
            Rs. 24
          </p>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "40px", height: "30px", marginRight: "10px" }}
              src={van}
              alt=""
            />
            <p style={{ color: "gray", fontSize: "10px", textAlign: "left" }}>
              Standard Delivery: Tomorrow 9:00AM - 1:30PM
            </p>
          </div>
          <div>
            <div
              style={{
                padding: "5px",
                display: "flex",
                justifyContent: "space-evenly",
                backgroundColor: "#FFD54F",
                width: "100%",
                margin: "10px 0",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 10px 20px -10px inset, rgba(0, 0, 0, 0.3) 0px 10px 20px -9px inset",
                borderRadius: "8px",
              }}
            >
              <h1 style={{ fontWeight: "bold" }}>ADD</h1>
              <img style={{ width: "18px" }} src={basket} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
