import React, { Component } from 'react';
import styles from './styles.scss';

const InputField = ({ displayValue }) => {
  return (
      <div className={ styles.Result } >
        {displayValue}
      </div>
  )
}

export default InputField;
