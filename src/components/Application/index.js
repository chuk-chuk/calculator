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
      clickedButton: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(e){
    this.setState({ clickedButton: e.target.value });
  }

  handleReset(){
    this.setState({clickedButton: ''});
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.Application}> {/* these styles leave in application folder */}
          <p>GET STARTED HERE</p>
        <DisplayInput displayValue={ this.state.clickedButton }/>
        <DisplayOutput />
        <ButtonsLayout getValue={ this.handleClick } resetValue={ this.handleReset } />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Application;
