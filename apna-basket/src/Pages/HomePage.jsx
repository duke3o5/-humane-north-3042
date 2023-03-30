import React from 'react'
import HomePageSlider from '../components/HomePageSlider'
// import '../style.scss'

export const HomePage = () => {
  return (
    <div className='home-main'>
      <div className="container">
        <div className="image-slider-top">
          <HomePageSlider />
        </div>
      </div>
    </div>
  )
}
