import React from 'react';
import C from './C';

const B = ({number, changeRandomNumber}) => {
  return (
    <div>
      <h2>Component B</h2>
      <C number={number} changeRandomNumber ={changeRandomNumber} />
    </div>
  );
};
export default B;
