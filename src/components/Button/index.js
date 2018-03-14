import React, { Component } from 'react';
import styles from './styles.scss';
import classnames from 'classnames';

const operators = ['c', '/', '%', '+', '=', '-','*', '+/-']

class Button extends Component  {

    constructor() {
        super();
    }

    render(){

      const { clickMe, value } = this.props;

        const classNames = classnames({
          [styles.BtnStyle]: true ,
          [styles.Operation]: operators.includes(value), // instead of false here you can drive styles from props if you like.
          [styles.BigButton]: value === '0'
        });

        return (
            <button onClick={() => clickMe(value)} className={classNames}>{value}</button>
        )
    }
}

Button.defaultProps = {
  clickMe: () => {}
}

export default Button;
