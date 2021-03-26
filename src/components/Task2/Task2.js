import React, { Component } from 'react';
import A from './A';
import style from './Task2.module.css';

class Task2 extends Component {
  state = {
    randomNumber: null,
  };
  changeRandomNumber = number => {
    this.setState({
      randomNumber: number,
    });
  };
  render() {
    return (
      <div className={style.container}>
        <A number={this.state.randomNumber} changeRandomNumber={this.changeRandomNumber} />
      </div>
    );
  }
}
export default Task2;
