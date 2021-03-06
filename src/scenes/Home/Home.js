import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import { Button, Icon } from 'semantic-ui-react';


const Home = ({scrollToAbout}) => {
  return(
    <div style={styles.container}>
      <div style={styles.text}>
        Hello, I'm <span style={styles.name}><b>Kevin Yonzon</b></span>.<br></br>
        I'm a full-stack web developer.<br></br>
      <Button inverted onClick={scrollToAbout}><span style={styles.buttonText}>View My Work</span><span style={styles.icon}><Icon name='chevron down' /></span></Button>
      </div>
    </div>
  )
};

Home.propTypes = {
  scrollToAbout: PropTypes.func,
}

export default Home;
