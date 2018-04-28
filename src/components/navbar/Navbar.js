import React from 'react';

import styles from './styles';

const Navbar = () => {
  return(
    <div style={styles.container}>
      <div style={styles.navButton}>HOME</div>
      <div style={styles.navButton}>ABOUT</div>
      <div style={styles.navButton}>PORTFOLIO</div>
      <div style={styles.navButton}>CONTACT</div>
    </div>
  )
}

export default Navbar;
