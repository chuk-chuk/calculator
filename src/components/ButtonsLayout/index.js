import React, { Component } from 'react';
import styles from './styles.scss';

class ButtonsLayout extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className={ styles.Rows }>
          <button onClick={ this.props.resetValue} value="c" className={ styles.BtnStyle + ' ' + styles.Operation }>C</button>
          <button value="+/-" name="memory" className={ styles.BtnStyle + ' ' + styles.Operation }>+/-</button>
          <button value="%" name="percent" className={ styles.BtnStyle + ' ' + styles.Operation }>%</button>
          <button value="/" name="devide" className={ styles.BtnStyle + ' ' + styles.Operation }>/</button>
        </div>

        <div className={ styles.Rows }>
          <button onClick={ this.props.getValue1 } value="7" className={ styles.BtnStyle }>7</button>
          <button onClick={ this.props.getValue1 } value="8" className={ styles.BtnStyle }>8</button>
          <button onClick={ this.props.getValue1 } value="9" className={ styles.BtnStyle }>9</button>
          <button onClick={ this.props.getValue1 } value="+" className={ styles.BtnStyle + ' ' + styles.Operation }>+</button>
        </div>

        <div className={ styles.Rows }>
          <button value="4" className={ styles.BtnStyle }>4</button>
          <button value="5" className={ styles.BtnStyle }>5</button>
          <button value="6" className={ styles.BtnStyle }>6</button>
          <button value="-" className={ styles.BtnStyle + ' ' + styles.Operation }>-</button>
        </div>

        <div className={ styles.Rows }>
          <button value="1" className={ styles.BtnStyle }>1</button>
          <button value="2" className={ styles.BtnStyle }>2</button>
          <button value="3" className={ styles.BtnStyle }>3</button>
          <button value="*" className={ styles.BtnStyle + ' ' + styles.Operation }>*</button>
        </div>

        <div className={ styles.Rows }>
          <button value="0" className={ styles.BtnStyle + ' ' + styles.BigButton }>0</button>
          <button value="," className={ styles.BtnStyle + ' ' + styles.Operation }>,</button>
          <button onClick={ this.props.getValue1 } value="=" className={ styles.BtnStyle + ' ' + styles.Operation }>=</button>
        </div>
      </div>
    );
  }
}

export default ButtonsLayout;
