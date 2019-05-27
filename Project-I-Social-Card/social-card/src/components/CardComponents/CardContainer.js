import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  
  function handleClick(event) {
      event.preventDefault();
      window.open('https://www.reactjs.org', '_blank');
  }

  return (
    <div className={'card'} onClick={handleClick}>
      <CardBanner />
      <CardContent />
    </div>
  );
};

export default CardContainer;