import React, { useState } from 'react';
import Heart from '../Svg/Heart';

import './index.scss';


const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [likeHeart, setLikeHeart] = useState(false);

  const handleClickLeft = () => {
    (index === 0) ? setIndex(images.length-1) : setIndex(index-1);  
  }

  const handleClickRight = () => {
    (index === images.length - 1) ? setIndex(0) : setIndex(index+1);
  }

  const handleHeart = () => {
    setLikeHeart(!likeHeart);
  }
  
  return (
  <div className="carousel">
    <button className="carousel__heart" onClick={handleHeart}>
      <Heart status={likeHeart} />
    </button>
    <div className="carousel__photos" style={{backgroundImage: `url(${images[index]})`}}></div>
    <div className="carousel__btnContainer">
      <div 
        onClick={() => handleClickLeft()}
        className="carousel__btn"
      >
        <span>&lt;</span>
      </div>
      <div 
        onClick={() => handleClickRight()}
        className="carousel__btn"
      >
        <span>&gt;</span>
      </div>
    </div>
  </div>
  )
}

export default Carousel;
