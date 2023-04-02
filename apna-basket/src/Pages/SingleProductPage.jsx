import { Container, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import van from '../assets/delivery-van.png'
import styled from 'styled-components';
import Nav from '../components/adminComponents/Navbar';

export const SingleProductPage = () => {
  const {id}=useParams(); 
  const [data,setData]=useState({}) 
  const toast=useToast()


  function addCart(){
    let obj={...data,qty:1}
    axios.post('https://big-basket-api.onrender.com/Cart',obj)
    .then(()=>toast({
      position:'top',
      title: data.name,
      description:'Added Successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    }))
  }

  useEffect(()=>{
    axios.get(`https://big-basket-api.onrender.com/Products/${id}`)
    .then(res=>{
       setData(res.data)
       console.log(res.data)
    })
 },[])

  return (
    <Container maxW={1210}>
      <P>{`HOME> FRUITS & VEGETABLES> ${data.name?.toUpperCase()}`}</P>
    <DIV>
      <div>
        <img src={data.Image}/>
      </div>
      <div>
        <p>{data.category}</p>
        <h1>{data.name} , {data.Weight?data.Weight:`500 g - Rs ${data.Price}`}</h1>
        <del>MRP : Rs. {(data.Price+data.Price*15/100).toFixed(2)}</del>
        <h4>Price : Rs. {data.Price}</h4>
        <h5>You Save : 15%</h5>
        <h6>( Inclusive of all taxes )</h6>
        <button onClick={addCart}>ADD TO BASKET</button>
        <div style={{border:'none',padding:'0',display:'flex',width:'100%',alignItems:'center',marginBottom:'20px'}}>
            <img style={{width:'40px',height:'30px',marginRight:'10px'}} src={van} />
            <x style={{color:'gray',fontSize:'10px',textAlign:'left'}}>Standard Delivery: Tomorrow 9:00AM - 1:30PM</x>
        </div>
        <p>About the product</p>
        <ul>
          <li>Young, fresh and healthy tender coconuts are a pure, tasty and nutritious energy drink that keeps body hydrated round the clock.</li>
          <li>Tender coconut is the most refreshing drink and best to quench your thirst in the summer.
</li>
          <li>Tender coconut has antioxidant properties which help to protect the body from free radicals.
</li>
          <li>It helps to lower blood pressure level, prevent kidney stone, and support heart health.
</li>
        </ul>
      </div>
    </DIV>
    </Container>
  )
}

const P=styled.p`
  color: #adacac;
  font-size: 13px;
  margin: 10px 0;
`

const DIV=styled.div`
  display:grid;
  /* border:1px solid red; */
  gap:30px;
  grid-template-columns:repeat(2,1fr);
  justify-content:space-between;
  padding:50px 50px;
  div:last-child{
    width:100%;
    padding-left:20px;
    border-left:1px solid gainsboro;
    button{
      padding:10px 20px;color:white;background-color:#84c225;border-radius:8px;margin:20px 0
    }
    h6{
      color:gray;font-size:13px
    }
    h5{
      font-size:14px;color:#9e0707;font-weight:500
    }
    h4{
      font-weight:700
    }
    del,li{
      color:gray;font-size:14px;text-align:justify;
    }
    ul{
      margin:10px 20px
    }
    h1{
      font-size:20px;margin-bottom:20px
    }
    p{
      width:fit-content;
      border-bottom:1px solid black;
      font-size:16px
    }
  }
  div:first-child{
    padding:20px;
    width:100%;
    display:flex;
    overflow:hidden;
    /* margin:15px; */
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    img{
      width:50%;
      align-items:center;
      margin:auto auto;
      transition: 0.4s all ease-in-out;
    }
  }

  div:first-child:hover img{
    cursor: zoom-in;
    transform: scale(2);
  } 

  @media all and (max-width:1024px){
    padding:20px 20px;
    grid-template-columns:repeat(1,1fr);
    gap:50px;
    div:last-child{
      border-left:none
    }
  }
`
