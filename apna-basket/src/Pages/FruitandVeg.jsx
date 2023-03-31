import React from 'react'
import { FruitsVegesSlider } from '../components/Carousel'
import { Container } from '@chakra-ui/react'
import { ProductCard } from '../components/ProductCard'
import styled from 'styled-components'
import { SideBar } from '../components/SideBar'
import { ProductList } from '../components/ProductList'

export const FruitandVeg = () => {
  return (
    
    <Container maxW={1210}>
      <P>{'HOME> FRUITS & VEGETABLES'}</P>
      <FruitsVegesSlider/>
      <DIV>
        <SideBar/>
        <ProductList/>
      </DIV>
    </Container>
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