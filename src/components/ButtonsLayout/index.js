import React, { Component } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import { connect } from 'react-redux';

class ButtonsLayout extends Component {
  constructor(props){
    super(props);
  }

  passValue = (numberValue) => {
    this.props.getValue(numberValue);
    this.props.dispatch({type: 'addNumberToStore', number: numberValue});
    console.log(numberValue);
  };


  passReset = (e) => {
    this.props.resetValue(e);
  };

  render() {
    console.log("PROPS", this.props);
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

const mapStateToProps = (state) => {
  return {}
}

export default connect(
  mapStateToProps
)(ButtonsLayout)
