import React from 'react';
import Hexagon from 'react-hexagon';

import styles from './styles';
import portrait from './images/kyPortrait.png';

const BioContainer = () => {
  return (
    <div style={styles.bioContainer}>
      <div style={styles.hexagonContainer}>
        <Hexagon
          backgroundImage={portrait}
          flatTop={true}
          style={styles.hexagon}
          backgroundScale={1.1}
        />
      </div>
      <div style={styles.caption}>
        {'Who is this guy?'}
      </div>
      <div style={styles.description}>
        {'I\'m a full-stack web developer currently living in Los Angeles County. When I\'m not coding, I like to work out at the gym, play games online, and drink boba.'}
      </div>
    </div>
  )
}

export default BioContainer;
