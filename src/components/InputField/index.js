import React, { Component } from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux';

export default ({ displayValue }) => {

  return (
      <div className={ styles.Result } >
        {displayValue}
      </div>
  )
}
