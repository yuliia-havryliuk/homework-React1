import React, { Component } from 'react';
import style from './Task1.module.css';
class Task1 extends Component {
  state = {
    inputValue: '',
  };
  changeInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  render() {
    return (
      <div className={style.container}>
        <div className={style.innerContainer}>
          <input
            type="text"
            placeholder={'Введіть текст...'}
            onChange={this.changeInputValue}
            maxLength={30}
          />
          {this.state.inputValue && <h1>{this.state.inputValue}</h1>}
        </div>
      </div>
    );
  }
}
export default Task1;
