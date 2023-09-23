import React, { useEffect } from 'react';
import './preloader.css';
import { preLoaderAnim } from '.';

const Preloader: React.FC = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Заботимся</span>
        <span>о вашем</span>
        <span>здоровье!</span>
      </div>
    </div>
  );
};

export default Preloader;
