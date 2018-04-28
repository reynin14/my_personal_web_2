import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Zoom from 'react-reveal/Zoom';


const Header = ({title}) => {
  return (
    <div style={styles.container}>
      <Zoom left>
        <div style={styles.header}>
          {title}
        </div>
        <div style={styles.underline}>
          //
        </div>
      </Zoom>
    </div>
  )
};

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
