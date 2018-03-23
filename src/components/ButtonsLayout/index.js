import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import { connect } from 'react-redux';

class ButtonsLayout extends Component {

  passValue = (numberValue) => {
    console.log('Im inside passValue', numberValue);
    if (numberValue === '='){

      this.props.dispatch({type: 'RESULT'});
    } else {

      this.props.dispatch({type: 'ADD_NUMBER_TO_STORE', number: numberValue});
    }
    console.log(numberValue);
  };

  passReset = (numberValue) => {
    this.props.dispatch({type: 'RESET', number: numberValue})
  };

  render() {
    return (
      <div>
        <div className={ styles.Rows }>
          <Button clickMe={ this.passReset } value="c"/>
          <Button clickMe={ this.passValue } value="+/-"/>
          <Button clickMe={ this.passValue } value="%"/>
          <Button clickMe={ this.passValue } value="/"/>
        </div>

        <div className={ styles.Rows }>
          <Button clickMe={ this.passValue } value="7"/>
          <Button clickMe={ this.passValue } value="8"/>
          <Button clickMe={ this.passValue } value="9"/>
          <Button clickMe={ this.passValue } value="+"/>
        </div>

        <div className={ styles.Rows }>
          <Button clickMe={ this.passValue } value="4"/>
          <Button clickMe={ this.passValue } value="5"/>
          <Button clickMe={ this.passValue } value="6"/>
          <Button clickMe={ this.passValue } value="-"/>
        </div>

        <div className={ styles.Rows }>
          <Button clickMe={ this.passValue } value="1"/>
          <Button clickMe={ this.passValue } value="2"/>
          <Button clickMe={ this.passValue } value="3"/>
          <Button clickMe={ this.passValue } value="*"/>
        </div>

        <div className={ styles.Rows }>
          <Button clickMe={ this.passValue } value="0" className={ styles.BigButton } />
          <Button clickMe={ this.passValue } value="."/>
          <Button clickMe={ this.passValue } value="="/>
        </div>
      </div>
    );
  }
}

export default connect()(ButtonsLayout)
