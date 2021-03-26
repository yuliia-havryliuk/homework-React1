import React from 'react';
import style from './Task2.module.css'

const C = ({ number, changeRandomNumber }) => {
  return (
    <div>
      <h2>Component C</h2>
      <button
        type="button"
        onClick={() =>
          changeRandomNumber((Math.floor(Math.random()*1000)))
        }
        className={style.btn}
      >Get Random Number
      </button>
      <h4 className={style.number}>{number}</h4>
    </div>
  );
};

export default C;
