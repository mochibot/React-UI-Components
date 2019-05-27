import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div>
      <div><CardBanner /></div>
      <CardContent />
    </div>
  );
};

export default CardContainer;