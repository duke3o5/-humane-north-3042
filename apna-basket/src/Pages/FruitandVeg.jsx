import React, { useEffect, useState } from 'react'
import { FruitsVegesSlider } from '../components/Carousel'
// import { Box, Container } from '@chakra-ui/react'
import styled from 'styled-components'
import { SideBar } from '../components/SideBar'
import { ProductList } from '../components/ProductList'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import Nav from '../components/adminComponents/Navbar';
import { Box, Button, Center, Container } from '@chakra-ui/react'

export const FruitandVeg = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const {isError}=useSelector(state=>state.productReducer);
  const [category,setCategory]=useState(searchParams.getAll('category')||[]);
  const [order,setOrder]=useState(searchParams.get('order')||'');
  const [price,setPrice]=useState(searchParams.getAll('price')||[])
  const [p,setP]=useState(12)

  useEffect(()=>{
    let obj={
      category,price,p
    };
    order && (obj.order=order)
    setSearchParams(obj)
  },[category,order,p])

  return (
    isError?<h1 style={{fontSize:'50px',width:'fit-content' ,margin:'50px auto'}}>
      OOPS! Something went wrong.
    </h1>:
    <Box w={['95%','95%','95%','95%','90%','77%']}m={'auto'}>
      <P>{'HOME> FRUITS & VEGETABLES'}</P>
      {/* <FruitsVegesSlider/> */}
      <DIV>
          <SideBar category={category} setCategory={setCategory} price={price} setPrice={setPrice}/>
          <ProductList order={order} setOrder={setOrder} p={p} category={category} setCategory={setCategory} price={price} setPrice={setPrice}/>
      </DIV>
      <Center><Button my={3} backgroundColor='#84c225' color='white' padding="2px 15px" borderRadius='8px' fontSize='20px' onClick={()=>setP(pre=>pre+8)}>View More</Button></Center>
      <a id='upper' href="#sliderF">
        <Button backgroundColor='#84c225' color='white'height='40px'width='40px'fontSize='20px'position= 'fixed'top='90vh'left={['89.5vw','95vw','95vw','92vw','96vw','92vw']}>&#11165;</Button>
      </a>
    </Box>
    // <Div>
  //   <div id='productMain'>
  //     {isError?<h1 style={{fontSize:'50px',width:'fit-content' ,margin:'50px auto'}}>OOPS! Something went wrong.</h1>:(
  //     <>
        // <P>{'HOME> FRUITS & VEGETABLES'}</P>
        // <FruitsVegesSlider/>
        // <DIV>
        //   <SideBar category={category} setCategory={setCategory} price={price} setPrice={setPrice}/>
        //   <ProductList order={order} setOrder={setOrder} p={p}/>
        // </DIV>
  //     </>)}
    //   <div><button style={{margin:'20px 520px',backgroundColor:'#84c225',color:'white',padding:"2px 15px",borderRadius:'8px',fontSize:'20px'}} onClick={()=>setP(p+1)}>View More</button></div>
    // </div>
    //   <a id='upper' href="#sliderF"><button 
    //   style={{backgroundColor:'#84c225',color:'white',height:'40px',width:'40px',fontSize:'20px',position: 'fixed',top:'90vh',left:'92vw'}}>&#11165;</button></a>
  //   </Div>
  )
}


const DIV=styled.div`
  display:flex;
  width:100%;
  margin:auto;

  
`
const P=styled.p`
  color: #adacac;
  font-size: 11px;
  margin: 10px 0;
`