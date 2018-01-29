import React, { Component } from 'react';
import styles from './styles.scss';

class DisplayInput extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <input className={ styles.Result } type="text" value={ this.props.displayValue1 } />
      </div>
    );
  }
}

export default DisplayInput;
