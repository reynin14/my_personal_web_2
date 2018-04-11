import React from 'react';

import styles from './styles';

import { Navbar } from '../../components/navbar'

const Intro = () => {
  return(
    <div style={styles.container}>
      <div style={styles.text}>
        Hello, I'm Kevin Yonzon.<br></br>
        I'm a full-stack web developer.
      </div>
      <Navbar />
    </div>
  )
};

export default Intro;
