import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Navbar = ({ scrollToHome, scrollToAbout, scrollToPortfolio, scrollToContact }) => {
  return(
    <div style={styles.container}>
      <div style={styles.navButton} onClick={scrollToHome}>HOME</div>
      <div style={styles.navButton} onClick={scrollToAbout}>ABOUT</div>
      <div style={styles.navButton} onClick={scrollToPortfolio}>PORTFOLIO</div>
      <div style={styles.navButton} onClick={scrollToContact}>CONTACT</div>
    </div>
  )
}

Navbar.propTypes = {
  scrollToHome: PropTypes.func,
  scrollToAbout: PropTypes.func,
  scrollToPortfolio: PropTypes.func,
  scrollToContact: PropTypes.func,
}

export default Navbar;
