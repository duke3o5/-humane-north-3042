import React, { useEffect, useState } from "react";
import "../style.scss";

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
