import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({title}) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {title}
      </div>
      <div style={styles.underline}>
        //
      </div>
    </div>
  )
};

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;
