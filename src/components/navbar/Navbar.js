import React from 'react';

import styles from './styles';

const Navbar = () => {
  return(
    <div style={styles.container}>
      <div style={styles.navButton}>Home</div>
      <div style={styles.navButton}>About</div>
      <div style={styles.navButton}>Portfolio</div>
      <div style={styles.navButton}>Contact</div>
    </div>
  )
}

export default Navbar;
