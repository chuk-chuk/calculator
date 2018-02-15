import React, { Component } from 'react';
import styles from './styles.scss';
import classnames from 'classnames';

class Button extends Component  {

    constructor() {
        super();
    }

    render(){

        const classNames = classnames({ 
          [styles.BtnStyle]: true , 
          [styles.Operation]: false, // instead of false here you can drive styles from props if you like.
          [styles.BigButton]: false 
        });

        return (
            <button onClick={() => this.props.clickMe(this.props.value) } className={classNames}>{ this.props.value }</button>
        )
    }
}

export default Button;
