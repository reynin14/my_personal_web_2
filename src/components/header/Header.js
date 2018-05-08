import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Slide from 'react-reveal/Slide';


const Header = ({title}) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {title}
      </div>
      <Slide left>
        <div style={styles.underline}>
          {'//'}
        </div>
      </Slide>
    </div>
  )
};

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
