import React, { Component } from 'react';

import styles from './styles';

const Navbar = () => {
  return(
    <div style={styles.container}>
      <div>Home</div>
      <div>About</div>
      <div>Portfolio</div>
      <div>Contact</div>
    </div>
  )
}

export default Navbar;
