import React, { Component } from 'react';
import styles from './styles.scss';

class DisplayOutput extends Component {
  render() {
    return (
      <div>
        <input className={ styles.Result } type="text" value="Result"/>
      </div>
    );
  }
}

export default DisplayOutput;
