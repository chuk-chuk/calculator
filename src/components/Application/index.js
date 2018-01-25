import React, { Component } from 'react';
import styles from './styles.scss';

import Header from '../Header';

class Application extends Component {
  render() {
    return (
      <div className={styles.Application}>
        <Header />
        <p className={styles.ApplicationIntro}>
          To get started, edit <code>src/Application.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Application;
