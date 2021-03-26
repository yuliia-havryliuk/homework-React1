import React from 'react';
import B from './B';
import style from './Task2.module.css';

const A = ({ number, changeRandomNumber }) => {
  return (
    <div className = {style.innerContainer}>
      <h2>Component A</h2>
      <B number = {number} changeRandomNumber ={changeRandomNumber}/>
    </div>
  );
};
export default A;
