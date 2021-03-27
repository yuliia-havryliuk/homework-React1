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
  clearInputValue = () => {
    this.setState({
      inputValue: '',
    });
  };
  render() {
    return (
      <div className={style.container}>
        <div className={style.innerContainer}>
          <input
            type="text"
            placeholder={'Введіть текст...'}
            value={this.state.inputValue}
            onChange={this.changeInputValue}
            maxLength={25}
          />
          {this.state.inputValue && (
            <div>
              <h1>{this.state.inputValue}</h1>
              <button className={style.btn} onClick={this.clearInputValue}>
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Task1;
