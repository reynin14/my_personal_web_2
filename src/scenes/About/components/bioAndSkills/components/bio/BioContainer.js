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
        {'I\'m the Front-End Developer for EyeCue Lab in Portland, OR.I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let\'s make something special.'}
      </div>
    </div>
  )
}

export default BioContainer;
