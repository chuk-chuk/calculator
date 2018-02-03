import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../Button';

class ButtonsLayout extends Component {
  constructor(props){
    super(props);
  }
//replace * with x when multiply
//same for devide / with division symbol
//validation input only numbers or valid operators
//button functions by types
  passValue = (e) => {
    this.props.getValue(e);
  };

  passReset = (e) => {
    this.props.resetValue(e);
  };

  render() {
    return (
      <div>
        <div className={ styles.Rows }>
          {/* <button onClick={ this.passReset } value="c" className={ styles.BtnStyle + ' ' + styles.Operation }>C</button> */}
          {/* <button value="+/-" name="memory" className={ styles.BtnStyle + ' ' + styles.Operation }>+/-</button>
          <button value="%" name="percent" className={ styles.BtnStyle + ' ' + styles.Operation }>%</button> */}
          {/* <button onClick={ this.props.getValue } value="/" name="devide" className={ styles.BtnStyle + ' ' + styles.Operation }>/</button> */}
          <Button clickMe={ this.passReset } value="c"/>
          <Button clickMe={ this.passValue } value="+/-"/>
          <Button clickMe={ this.passValue } value="%"/>
          <Button clickMe={ this.passValue } value="/"/>
        </div>

        <div className={ styles.Rows }>
          {/* <button onClick={ this.props.getValue } value="+" className={ styles.BtnStyle + ' ' + styles.Operation }>+</button> */}
          <Button clickMe={ this.passValue } value="7"/>
          <Button clickMe={ this.passValue } value="8"/>
          <Button clickMe={ this.passValue } value="9"/>
          <Button clickMe={ this.passValue } value="+"/>
        </div>

        <div className={ styles.Rows }>
          {/* <button onClick={ this.props.getValue } value="-" className={ styles.BtnStyle + ' ' + styles.Operation }>-</button> */}
          <Button clickMe={ this.passValue } value="4"/>
          <Button clickMe={ this.passValue } value="5"/>
          <Button clickMe={ this.passValue } value="6"/>
          <Button clickMe={ this.passValue } value="-"/>
        </div>

        <div className={ styles.Rows }>
          {/* <button onClick={ this.props.getValue } value="*" className={ styles.BtnStyle + ' ' + styles.Operation }>*</button> */}
          <Button clickMe={ this.passValue } value="1"/>
          <Button clickMe={ this.passValue } value="2"/>
          <Button clickMe={ this.passValue } value="3"/>
          <Button clickMe={ this.passValue } value="*"/>
        </div>

        <div className={ styles.Rows }>
          {/* <button onClick={ this.props.getValue } value="0" className={ styles.BtnStyle + ' ' + styles.BigButton }>0</button>
          {/* <button onClick={ this.props.getValue } value="=" className={ styles.BtnStyle + ' ' + styles.Operation }>=</button> */}
          <Button clickMe={ this.passValue } value="0" className={ styles.BigButton } />
          <Button clickMe={ this.passValue } value="."/>
          <Button clickMe={ this.passValue } value="="/>
        </div>
      </div>
    );
  }
}

export default ButtonsLayout;
