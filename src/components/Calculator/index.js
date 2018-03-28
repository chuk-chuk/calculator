import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './styles.scss'
import InputField from '../InputField'
import ButtonsLayout from '../ButtonsLayout'

const Calculator = ({clickedButton, resultBox}) => {
  return(
    <div className={styles.Application}>
      <div className={styles.InputFields}>
        <InputField displayValue={ clickedButton }/>
        <InputField displayValue={ resultBox }/>
      </div>
      <ButtonsLayout/>
    </div>
  )
}
// takes value out of the store
const mapStateToProps = (state) => {
  console.log("STATE", state);
  return {
    clickedButton: state.input,
    resultBox: state.result
  }
}

const ConnectedCalc = connect(mapStateToProps)(Calculator)
export default ConnectedCalc
