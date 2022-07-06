import React from 'react'
import ProductDesign from './ProductDesign'

const DesignCarousel = ({click}) => {
  return (

    <div class="slider">
  
  <a href="#slide-1">1</a>
  <a href="#slide-4">2</a>


  <div class='carousel'>
        <ProductDesign id={1} click={() => click()}/>
        <ProductDesign id={2} click={() => click()}/>
        <ProductDesign id={3} click={() => click()}/>
        <ProductDesign id={4} click={() => click()}/>
    </div>
</div>
  )
}

export default DesignCarousel