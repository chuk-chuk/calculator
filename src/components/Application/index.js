import React, { Component } from 'react';
import styles from './styles.scss';

import Header from '../Header';
import Footer from '../Footer';
import InputField from '../InputField';
import ButtonsLayout from '../ButtonsLayout';
import { connect } from 'react-redux';
// import { actionPressButton, addNumberToStore } from '../../reducer'

class Application extends Component {

  render() {
    const { clickedButton, resultBox } = this.props
    console.log(this.props);
    return (
      <div>
        <Header />
        <div className={styles.Application}>
            <div className={styles.InputFields}>
              <InputField displayValue={ clickedButton }/>
              <InputField displayValue={ resultBox }/>
            </div>
            <ButtonsLayout/>
        </div>
        <Footer />
      </div>
    );
  }
}
// takes value out of the store
const mapStateToProps = (state) => {
  return {
    clickedButton: state.input,
    resultBox: state.result
  }
}

export default connect(mapStateToProps)(Application)
