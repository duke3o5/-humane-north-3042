import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components'
import van from '../assets/delivery-van.png'
import { getProduct } from '../Redux/ProductReducer/action';
import { ProductCard } from './ProductCard';
import {Grid, Skeleton, SkeletonText, Spinner, Stack} from '@chakra-ui/react'

export const ProductList = () => {
  const [searchParams]=useSearchParams();
  const location =useLocation()
  const {products,isError,isLoading}=useSelector(state=>state.productReducer)
  const dispatch=useDispatch()

  console.log(products)
  useEffect(()=>{
    let obj={
      params:{
        category:searchParams.getAll('category'),
        _sort:searchParams.get('order')&&'price',
        _order:searchParams.get('order')
      }
    }
    dispatch(getProduct())
  },[location.search])

  return (
    <DIV>
      <box>
        <p>Fruits & Vegetables {isLoading?<Spinner size='xs' />:'('+products.length+')'}</p>
        <select>
          <option value="">Popularity</option>
          <option value="">Price-Low to High</option>
          <option value="">Price-High to Low</option>
          <option value="">Alphabetical</option>
        </select>
      </box>
      <p className="aboveGrid"><img src={van} /><span>ALL PRODUCTS</span></p><hr />
      <div className="grid">
        {isLoading?<Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {new Array(110).fill(0).map(el=><Skeleton height={350} width={220}/>)}
        </Grid>:products.map(el=><ProductCard
            key={el.id} {...el}
        />)}
      </div>
    </DIV>
  )
}


//styling

const DIV=styled.div`
  padding: 15px;
  border-left: 1px solid gainsboro;
  width: 88%;

  

  box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3%;
  }

  .grid{
    margin-top: 40px;
    display:grid;
    grid-template-columns:repeat(4,1fr);
  }

  .aboveGrid{
    font-size: 12px;
    width: 130px;
    border-bottom:3px solid #84c225;
    display: flex;
    align-items: center;
    img{
      width: 32px;
      height: 25px;
      margin-right: 10%;
    }
  }
  select{
    border: 1px solid gainsboro;
    color: gray;
    font-size: 14px;
    width: 200px;
    padding: 3px;
  }
  
  box p{
    font-size: 25px;
  }
`
