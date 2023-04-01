import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components'
import van from '../assets/delivery-van.png'
import { getProduct } from '../Redux/ProductReducer/action';
import { ProductCard } from './ProductCard';
import {Grid, Skeleton, Spinner} from '@chakra-ui/react'

export const ProductList = ({order,setOrder}) => {
  const [searchParams]=useSearchParams();
  const location =useLocation()
  const {products,isLoading}=useSelector(state=>state.productReducer)
  const dispatch=useDispatch()

  console.log(products)
  useEffect(()=>{
    let sort,order;
    if(searchParams.get('order')==='asc2'){
      sort='name';
      order='asc'
    }else if(searchParams.get('order')==='desc2'){
      sort='category';
      order='desc';
    }else{
      sort='Price';
      order=searchParams.get('order');
    }

    let obj={
      params:{
        category:searchParams.getAll('category'),
        _sort:searchParams.get('order') && sort,
        _order:order,
        q:searchParams.get('q')
      }
    }
    dispatch(getProduct(obj))
  },[location.search])


  function sortFn(e){
    setOrder(e.target.value)
  }


  return (
    <DIV>
      <box>
        <p>Fruits & Vegetables {isLoading?<Spinner size='xs' />:'('+products.length+')'}</p>
        <select value={order} onChange={sortFn}>
          <option value="desc2">Popularity</option>
          <option value="asc">Price-Low to High</option>
          <option value="desc">Price-High to Low</option>
          <option value="asc2">Alphabetical</option>
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
