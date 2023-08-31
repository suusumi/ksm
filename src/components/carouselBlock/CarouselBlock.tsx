import React from 'react';
import Carousel from 'react-material-ui-carousel';

import Blood from '../../assets/content/main/carouselBlock/analyzes_blood.png';
import Pedestrian from '../../assets/content/main/carouselBlock/zubkov_pediatrician.png';
import Student from '../../assets/content/main/carouselBlock/student_health.png'
import Usi from '../../assets/content/main/carouselBlock/usi_kid.png'
import BezBoli from '../../assets/content/main/carouselBlock/bez_boly.png'
function CarouselBlock() {
  const items = [
    {
      image: Blood,
      caption: 'Caption 1',
    },
    {
      image: Pedestrian,
      caption: 'Caption 2', 
    },
    {
      image: Student,
      caption: 'Caption 3', 
    },
    {
      image: Usi,
      caption: 'Caption 4', 
    },
    {
      image: BezBoli,
      caption: 'Caption 5',
    },
  ];

  
  return (
    <div>
      <Carousel>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={`Slide ${index}`} />
            {/* <p>{item.caption}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselBlock;
