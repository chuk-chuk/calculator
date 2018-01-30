import React, { Component } from 'react';
import styles from './styles.scss';

const DisplayInput = ({ displayValue }) => {
  return (
      <div className={ styles.Result }>
        {displayValue}
      </div>
  )
}

export default DisplayInput;

//other option of destructing the props just before the return:
// render() {
//   const { displayValue } = this.props;
// return (
