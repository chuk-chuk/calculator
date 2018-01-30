import React, { Component } from 'react';
import styles from './styles.scss';

const DisplayOutput = ({ displayValue }) => {
  return (
    <div className={ styles.Result }>
      { displayValue }
    </div>
  )
}

export default DisplayOutput;
