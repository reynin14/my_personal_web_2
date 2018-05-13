import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Hexagon from 'react-hexagon';

import sample from './images/accessible-icon.svg'

const Attribute = ({iconName, keyAdjective, description}) => {
  return (
    <div style={styles.soloAttributeContainer}>
      <div style={styles.hexagonContainer}>
        <Hexagon
          flatTop={true}
          backgroundScale={1}
          backgroundImage={sample}
          style={styles.hexagon}
        />
      </div>

      <div style={styles.keyAdjective}>
        {keyAdjective}
      </div>

      <div style={styles.description}>
        {description}
      </div>

    </div>
  )
}

Attribute.propTypes = {
  iconName: PropTypes.string,
  keyAdjective: PropTypes.string,
  description: PropTypes.string,
}

export default Attribute;
