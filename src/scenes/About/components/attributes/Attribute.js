import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

import styles from './styles';
import hexagon from './images/hexagon.png'

const Attribute = ({iconName, keyAdjective, description}) => {
  return (
    <div style={styles.container}>
      <Icon name={iconName} size='huge' />
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
