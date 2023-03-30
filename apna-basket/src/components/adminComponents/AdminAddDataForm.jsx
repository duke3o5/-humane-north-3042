import React, { useState } from "react";
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { postAdminData } from "../../Redux/AdminReducer/action";
import { AdminDataList } from "./AdminDataList";


const init={
    image:'',
    name:'',
    rating:'',
    category:'',
    price:0
}

export const AdminAddDataForm = () => {
    const [data,setData]= useState(init);

    const dispatch=useDispatch();

    const handleChange=(e)=>{
        const {name, value}= e.target
        setData(prev=>{
            return {...prev, [name]: value}
        })

        // console.log(data);

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setData(data);
        dispatch(postAdminData(data));
        // console.log(data);
    }

  return (
    <DIV>
      <FORM onSubmit={handleSubmit}>

        <div>
          <label>
            <h4>Item Image : </h4>
          </label>
          <input className="adminInput" type="text" placeholder="Item Image" name="image"  onChange={handleChange}/>
        </div>

        <div>
          <label>
            <h4>Item Name : </h4>
          </label>
          <input className="adminInput" type="text" placeholder="Add Item Name" name="name" onChange={handleChange}/>
        </div>

        <div>
          <label>
            <h4>Item Rating : </h4>
          </label>
          <input className="adminInput" type="text" placeholder="Add Product Rating" name="rating" onChange={handleChange}/>
        </div>

        <div>
          <label>
            <h4>Item Category : </h4>
          </label>
          <input className="adminInput" text="text" placeholder="Add Product Category" name="category" onChange={handleChange}/>
        </div>

        <div>
          <label>
            <h4>Item Price : </h4>
          </label>
          <input className="adminInput" text="text" placeholder="Add Product Price" name="price" onChange={handleChange}/>
        </div>


        <div>
          <button type="submit">List Item</button>
        </div>
      </FORM>

      <AdminDataList/>
    </DIV>
  );
};

const DIV=styled.div`
background-color: green;
`;

const FORM=styled.form`
border: 1px solid grey;
background-color: #99ff99;
border-radius: 5px;
width: 70%;
margin: auto;

.adminInput{
    width: 70%;
    height: 2rem;
    border-radius: 5px;
}

`;