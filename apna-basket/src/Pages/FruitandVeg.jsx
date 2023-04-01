import React, { useEffect, useState } from 'react'
import { FruitsVegesSlider } from '../components/Carousel'
import { Container } from '@chakra-ui/react'
import styled from 'styled-components'
import { SideBar } from '../components/SideBar'
import { ProductList } from '../components/ProductList'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

export const FruitandVeg = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const {isError}=useSelector(state=>state.productReducer);
  const [category,setCategory]=useState(searchParams.getAll('category')||[]);
  const [order,setOrder]=useState(searchParams.get('order')||'');
  const [price,setPrice]=useState(searchParams.getAll('price')||[])
  console.log(price)
  useEffect(()=>{
    let obj={
      category,price
    };
    order && (obj.order=order)
    setSearchParams(obj)
  },[category,order])

  return (<div>
    <Container maxW={1210}>
      {isError?<h1 style={{fontSize:'50px',width:'fit-content' ,margin:'50px auto'}}>OOPS! Something went wrong.</h1>:(
      <>
        <P>{'HOME> FRUITS & VEGETABLES'}</P>
        <FruitsVegesSlider/>
        <DIV>
          <SideBar category={category} setCategory={setCategory} price={price} setPrice={setPrice}/>
          <ProductList order={order} setOrder={setOrder}/>
        </DIV>
      </>)}
    </Container>
      <a href="#sliderF"><button 
      style={{backgroundColor:'#84c225',color:'white',height:'40px',width:'40px',fontSize:'20px',position: 'fixed',top:'90vh',left:'92vw'}}>&#11165;</button></a>
    </div>
  )
}

const DIV=styled.div`
  display:flex;
  width:100%;
`
const P=styled.p`
  color: #adacac;
  font-size: 11px;
  margin: 10px 0;
`