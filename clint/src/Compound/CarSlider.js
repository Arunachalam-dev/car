// CarSlider.jsx
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Sample car images
const carImages = [
  {
    name: 'Ferrari F8',
    image: 'https://www.novitecgroup.com/assets/images/slider/Ferrari/header-f8__FocusFillWyIwLjAwIiwiMC4wMCIsMTkyMCw2MDBd.jpg',
  },
  {
    name: 'Lamborghini Huracán',
    image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/09_18_refresh/gallery/gw_hura_04.jpg',
  },
  {
    name: 'Porsche 911',
    image: 'https://press.porsche.com/prod/presse_pag/PressResources.nsf/jumppage/modelle-911-911_carrera_gts/$file/2024_992ll_carrera_gts.jpg',
  },
  {
    name: 'Aston Martin DB11',
    image: 'https://imgd.aeplcdn.com/1920x1080/cw/ec/25539/Aston-Martin-DB11-Right-Front-Three-Quarter-82872.jpg?v=201711021421&q=80&q=80',
  },
  {
    name: 'McLaren 720S',
    image: 'https://imgd.aeplcdn.com/1920x1080/cw/ec/25539/Aston-Martin-DB11-Right-Front-Three-Quarter-82872.jpg?v=201711021421&q=80&q=80',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarSlider = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Exotic Car Showcase</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {carImages.map((car, index) => (
          <div key={index} style={{ padding: '10px' }}>
            <img
              src={car.image}
              alt={car.name}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3 style={{ textAlign: 'center' }}>{car.name}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarSlider;
