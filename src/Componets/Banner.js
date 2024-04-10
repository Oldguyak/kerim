
  import React, { useState, useEffect } from 'react';
  import '../banner.css';
  import xboxImg from '../images/xbox.png';
  import pixelProImg from '../images/pixelpro.png';
  import budsProImg from '../images/budspro.png';

  const BannerSlider = () => {
    const [activeImage, setActiveImage] = useState(0);
    const images = [
      { src:xboxImg, alt: 'Image 1' },
      { src: pixelProImg, alt: 'Image 2' },
      { src: budsProImg, alt: 'Image 3' },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveImage((prevActiveImage) => (prevActiveImage + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="banner-slider">
        <div className="banner-image active">
          <img src={images[activeImage].src} alt={images[activeImage].alt} />
        </div>
        <div className='banner-stack'>
        <div className="banner-image inactive">
          <img src={images[(activeImage + 1) % images.length].src} alt={images[(activeImage + 1) % images.length].alt} />
        </div>
        <div className="banner-image inactive">
          <img src={images[(activeImage + 2) % images.length].src} alt={images[(activeImage + 2) % images.length].alt} />
        </div>
        </div>
      </div>
    );
  };
  
  export default BannerSlider;