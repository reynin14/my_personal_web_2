import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Slide from 'react-reveal/Slide';


const Header = ({title}) => {
  return (
    <Slide left cascade ssrReveal>
      <div style={styles.container}>
        <div style={styles.header}>
          {title}
        </div>
        <div style={styles.underline}>
          {'//'}
        </div>
      </div>
    </Slide>
  )
};

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
