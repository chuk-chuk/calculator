import React, { Component } from 'react';
import styles from './styles.scss';

import Header from '../Header';
import Footer from '../Footer';
import DisplayInput from '../DisplayInput';
import DisplayOutput from '../DisplayOutput';
import ButtonsLayout from '../ButtonsLayout';

class Application extends Component {
  render() {
    return (
      <div className={styles.Application}> {/* these styles leave in application folder */}
        <Header />
        <p className={styles.ApplicationIntro}> {/* these styles leave in application folder */}
          To get started, edit <code>src/Application.js</code> and save to reload.
        </p>
        <DisplayInput />
        <DisplayOutput />
        <ButtonsLayout />
        <Footer />
      </div>
    );
  }
}

export default Application;
