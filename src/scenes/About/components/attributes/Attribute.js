import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

import { Icon } from 'semantic-ui-react';

const Attribute = ({ iconName, keyAdjective, description }) => {
  return (
    <div style={styles.soloAttributeContainer}>

      <Icon name={iconName} size='massive' />

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
