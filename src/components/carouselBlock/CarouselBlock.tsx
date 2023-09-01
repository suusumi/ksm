import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Blood from '../../assets/content/main/carouselBlock/analyzes_blood.png';
import Pedestrian from '../../assets/content/main/carouselBlock/zubkov_pediatrician.png';
import Student from '../../assets/content/main/carouselBlock/student_health.png';
import Usi from '../../assets/content/main/carouselBlock/usi_kid.png';
import BezBoli from '../../assets/content/main/carouselBlock/bez_boly.png';

import BloodMob from '../../assets/content/main/carouselBlock/blood__mob.png';
import PedestrianMob from '../../assets/content/main/carouselBlock/zubkov_pediatrician_mob.png';
import StudentMob from '../../assets/content/main/carouselBlock/student_mob.png';
import UsiMob from '../../assets/content/main/carouselBlock/kid_mob.png';
import BezBoliMob from '../../assets/content/main/carouselBlock/bez_aik_mob.png';

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

  const itemsMob = [
    {
      image: BloodMob,
      caption: 'Caption 1',
    },
    {
      image: PedestrianMob,
      caption: 'Caption 2', 
    },
    {
      image: StudentMob,
      caption: 'Caption 3', 
    },
    {
      image: UsiMob,
      caption: 'Caption 4', 
    },
    {
      image: BezBoliMob,
      caption: 'Caption 5',
    },
  ];

  // Проверяем размер экрана
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only('xs'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg')); // Десктопный размер экрана, возможно надо поменять на md

  // Определяем, какие элементы использовать в зависимости от размера экрана
  let itemsToRender = items; // По умолчанию, для десктопных экранов
  if (isXsScreen) {
    itemsToRender = itemsMob; // Используем itemsMob для мобильных экранов
  }

  return (
    <div>
      <style>
        {`
          /* Стили для изображений */
          .carousel-image {
            width: 100%; /* Ширина изображения на всех экранах */
            height: auto; /* Автоматическая высота, чтобы сохранить пропорции */
          }

          /* Стили для десктопных экранов (пример) */
          @media (min-width: 1280px) {
            .carousel-image {
              max-width: 100%; /* Ограничение ширины на десктопных экранах */
            }
          }
        `}
      </style>
      <Carousel>
        {itemsToRender.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={`Slide ${index}`} className="carousel-image" />
            {/* <p>{item.caption}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselBlock;
