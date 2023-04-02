import React, { useState } from 'react';
import van from '../assets/delivery-van.png'
import basket from '../assets/tool.png';
import styled from 'styled-components';
import axios from 'axios';
import {Box, useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ProductCard = ({id,rating,name,Image,category,Price,Weight}) => {
  
  const toast=useToast();

  function addCart(){
    let obj={rating,name,Image,category,Price,Weight,qty:1}
    axios.post('https://big-basket-api.onrender.com/Cart',obj)
    .then(()=>toast({
      position:'top',
      title: name,
      description:'Added Successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    }))
  }

  return (
    <DIV>
    <Box className='fNvCard'>
      <Link to={`/products/${id}`}><img src={Image} style={{margin:'auto',width:'90%'}} /></Link>
      <div style={{padding:'15px'}}>
        <p style={{textAlign:'left',color:'gray',fontSize:'11px'}}>{category}</p>
        <p style={{textAlign:'left',fontSize:'14px',marginBottom:'3px'}}>{name.substring(0,26)}</p>
        <span style={{fontWeight:'bolder',fontSize:'13px',color:'#689f38',backgroundColor:'#e3ebda',padding:'0 5px'}}>{rating} &#9733;</span>
        <input disabled placeholder={`  ${Weight||"500 g - Rs 18.50"}                   ▼`} style={{border:'1px solid gainsboro',width:'104%',height:'22px',margin:'10px 0 0 -3px',fontSize:'12px',fontWeight:'bold',color:'gray',cursor:'pointer'}}>
        </input>
        <div style={{backgroundColor:'#f4f3f2',width:'104%',marginLeft:'-3px',padding:'10px'}}>
          <p style={{textAlign:'left'}}><del style={{color:'gray',fontSize:'10px'}}>MRP : Rs. {(Price+Price*15/100).toFixed(2)}</del> Rs. {Price}</p>
          <div style={{display:'flex'}}>
            <img style={{width:'40px',height:'30px',marginRight:'10px'}} src={van} />
            <p style={{color:'gray',fontSize:'10px',textAlign:'left'}}>Standard Delivery: Tomorrow 9:00AM - 1:30PM</p>
          </div>
          <div>
            <div id='button' onClick={addCart}>
              <h1 style={{fontWeight:'bold'}}>ADD</h1>
              <img style={{width:'20px',height:'15px'}} src={basket}/>
            </div>
          </div>
        </div>
      </div>
    </Box>
    </DIV>
  )
}


const DIV=styled.div`
  .fNvCard:hover{
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .fNvCard{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    margin-bottom:35px;
    padding-top:10px
  }

  #button{
    padding:5px 50px;display:flex;align-items:center;justify-content:space-evenly;background-color:#FFD54F;width:100%;margin:10px 0 0;box-shadow: 
    rgba(50, 50, 93, 0.25) 0px 10px 20px -10px inset, rgba(0, 0, 0, 0.3) 0px 10px 20px -9px inset;border-radius:8px
  }
  #button:hover{
    cursor: pointer;
    background-color:#fff64f;
  }
`
