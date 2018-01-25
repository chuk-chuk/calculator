import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './styles.scss';

const Header = () => {
    return (
        <header className={styles.Header}>
          <img src={logo} className={styles.HeaderLogo} alt="logo" />
          <h1 className={styles.HeaderTitle}>Welcome to React</h1>
        </header>
    );
};

Header.displayName = 'Header';

export default Header;