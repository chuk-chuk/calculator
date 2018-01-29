import React, { Component } from 'react';
import styles from './styles.scss';

import Header from '../Header';
import Footer from '../Footer';
import DisplayInput from '../DisplayInput';
import DisplayOutput from '../DisplayOutput';
import ButtonsLayout from '../ButtonsLayout';

class Application extends Component {
  constructor(){
    super();
    this.state = {
      clickedButton1: '',
      resultBox: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(e){
    const value = e.target.value;
    switch(value) {
      case '=': {
        const answer = eval(this.state.clickedButton1).toString();
        this.setState({ resultBox: answer });
        break;
      }

      default: {
        this.setState({ resultBox: this.state.clickedButton1 += value });
        break;
      }
    }
  }

  handleReset(){
    this.setState({clickedButton1:''});
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.Application}> {/* these styles leave in application folder */}
          <p>GET STARTED HERE</p>
        <DisplayInput displayValue1={ this.state.clickedButton1 }/>
        <DisplayOutput displayValue1={ this.state.resultBox }/>
        <ButtonsLayout
          getValue1={ this.handleClick }
          resetValue={ this.handleReset } />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Application;
