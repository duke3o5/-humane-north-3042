import React from 'react'
import { FruitsVegesSlider } from '../components/Carousel'
import { Container } from '@chakra-ui/react'
import { ProductCard } from '../components/ProductCard'

export const FruitandVeg = () => {
  return (
    <Container maxW={1100}>
      <FruitsVegesSlider/>
      <ProductCard/>
    </Container>
  )
}
