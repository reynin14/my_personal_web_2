import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Home = ({scrollToAbout}) => {
  return(
    <div style={styles.container}>
      <div style={styles.text}>
        Hello, I'm Kevin Yonzon.<br></br>
        I'm a full-stack web developer.
      </div>
      <button onClick={scrollToAbout}>View My Work</button>
    </div>
  )
};

Home.propTypes = {
  scrollToAbout: PropTypes.func,
}

export default Home;
