import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
  let date = moment().format("D MMM");

  return (
    <div className={'header-title'}>
      <h1>Lambda School</h1>
      <p>@LambdaSchool &#8226; {date}</p>
    </div>
  );
};

export default HeaderTitle;

