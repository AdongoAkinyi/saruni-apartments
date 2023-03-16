import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AmenitiesHome from "../Amenities/AmenitiesHome";
import ResidenceHome from "../Residence/ResidenceHome";
import NeighborhoodHome from "../Neighborhood/NeighborhoodHome";
import React, { useEffect } from "react";


const rotateAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in-out";
  let slideStyle = {
    display: "block",
    minHeight: "100%",
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
    transform: `rotate(0)`,
    position:
      state.previousItem === state.selectedItem ? "relative" : "absolute",
    inset: "0 0 0 0",
    zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
    opacity: state.previousItem === state.selectedItem ? "1" : "0",
    WebkitTransitionDuration: transitionTime,
    MozTransitionDuration: transitionTime,
    OTransitionDuration: transitionTime,
    transitionDuration: transitionTime,
    msTransitionDuration: transitionTime,
  };
  return {
    slideStyle,
    selectedStyle: {
      ...slideStyle,
      opacity: 1,
      position: "relative",
      zIndex: 2,
      filter: `blur(0)`,
    },
    prevStyle: {
      ...slideStyle,
      transformOrigin: " 0 100%",
      transform: `rotate(${
        state.previousItem > state.selectedItem ? "-45deg" : "45deg"
      })`,
      opacity: "0",
      filter: `blur( ${
        state.previousItem === state.selectedItem ? "0px" : "5px"
      })`,
    },
  };
};

function Cara() {

    useEffect(() => {
      const getNumbers =  sessionStorage.getItem("numberReloaded");

      if(typeof(getNumbers)  === 'undefined' 
      || getNumbers === null  || parseInt(getNumbers)  === 1){
        window.location.reload()
        sessionStorage.setItem("numberReloaded",2)
      }
    
   
    }, [])
    
  
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop
      interval={2000}
      transitionTime={2000}
      animationHandler={rotateAnimationHandler}
      swipeable={false}
    >
      <NeighborhoodHome />
      <AmenitiesHome />
      <ResidenceHome />
    </Carousel>
  );
}

export default Cara;
