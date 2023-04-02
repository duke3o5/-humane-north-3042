import React, { useEffect, useState } from "react";
import "../style.scss";
import Slider from "react-slick";

// Created new component

const imageSlide = [
  {
    url: `https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_270323_Bangalore.jpg`, id: 1
  },
  {
    url: `https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_1600x460_070922.jpg`, id : 2
  },
];

const HomePageSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "436px",
  };
  const goToNext = (currentState) => {
    setCurrentState(currentState)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        if(currentState === 1){
            setCurrentState(0)
        }
        else{
            setCurrentState(currentState+1)
        }
    }, 5000)
    return ()=>clearTimeout(timer)
  } , [currentState])


//   const handleChangeSlider = (e) => {
//     console.log(e)
//     setCurrentState(currentState + 1)
//   }

  return (
    <div className="image-slider">
      <div style={bgImageStyle}></div>
      <div className="description">
        <div className="des-ch">
          <h5>Offer On</h5>
          <p>Staples</p>
        </div>
        <div className="des-ch">
          <h5>Fresho</h5>
          <p>Meat</p>
        </div>
      </div>
      <div>
        {
           imageSlide.map((imageSlide, currentState) => (
            <span key={currentState} onClick={() => goToNext(currentState)}></span>
           )) 
        }
      </div>
    </div>
  );
};

export default HomePageSlider;

// Bottom Slider
const imageSlideBottom = [
  {
    url: `https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250323_400.jpg`, id: 1
  },
  {
    url: `https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250223_400.jpg`, id : 2
  },
  {
    url : `https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250323_400.jpg` , id : 3
  },
  {
    url : `https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250323_400.jpg` , id : 4
  }
];
export const HomePageSliderBottom = () => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlideBottom[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    height: "436px",
    // width: '77%',
    border: '1px solid rgb(211, 208, 208)',
    
  };
  const goToNext = (currentState) => {
    setCurrentState(currentState)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        if(currentState === 1){
            setCurrentState(0)
        }
        else{
            setCurrentState(currentState+1)
        }
    }, 5000)
    return ()=>clearTimeout(timer)
  } , [currentState])


//   const handleChangeSlider = (e) => {
//     console.log(e)
//     setCurrentState(currentState + 1)
//   }

  return (
    <div className="image-slider-bottom">
      <div style={bgImageStyle}></div>
      <div>
        {
           imageSlideBottom.map((imageSlideBottom, currentState) => (
            <span key={currentState} onClick={() => goToNext(currentState)}></span>
           )) 
        }
      </div>
    </div>
  );
};




// Product Carousal for home page
export const MultipleItems = () => {
   
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div> */}
          {
            
          }
        </Slider>
      </div>
    );
  }

