import React from 'react';

import styles from './styles';

import { Navbar } from '../../components/navbar'

const Home = () => {
  return(
    <div style={styles.container}>
      <div style={styles.text}>
        Hello, I'm Kevin Yonzon.<br></br>
        I'm a full-stack web developer.
      </div>
    </div>
  )
};

export default Home;
