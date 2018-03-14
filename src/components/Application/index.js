import React, { Component } from 'react';
import styles from './styles.scss';

import Header from '../Header';
import Footer from '../Footer';
import InputField from '../InputField';
import ButtonsLayout from '../ButtonsLayout';

class Application extends Component {
  constructor(){
    super();
    this.state = {
      clickedButton: '',
      resultBox: '',
    }
  }

  handleClick = (e) => {
    const value = e;
    switch(value) {
      case '=': {
        const answer = eval(this.state.clickedButton).toString();
        this.setState({ resultBox: answer });
        break;
      }

      default: {
        this.setState({ clickedButton: this.state.clickedButton += value });  //adding to the string!!
        break;
      }
    }
  }

  handleReset = () => {
    this.setState({clickedButton:''});
    this.setState({resultBox:''});
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.Application}> {/* these styles leave in application folder */}
            <div className={styles.InputFields}>
              <InputField displayValue={ this.state.clickedButton }/>
              <InputField displayValue={ this.state.resultBox }/>
            </div>
            <ButtonsLayout
              getValue={ this.handleClick }
              resetValue={ this.handleReset }
            />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Application;
