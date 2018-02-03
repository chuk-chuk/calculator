import React, { Component } from 'react';
import styles from './styles.scss';
// import classnames from 'classnames';

class Button extends Component  {
  constructor(props){
    super(props);
  }
  render(){

    // const classNames = classnames({ [styles.BtnStyle]: true }, { [styles.Operation]: false }, { [styles.BigButton]: false });

    return (
      <button onClick={() => this.props.clickMe(this.props.value) } className={ styles.BtnStyle }>{ this.props.value }</button>
    )
  }
}

export default Button;
