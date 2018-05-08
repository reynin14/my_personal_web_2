import React from 'react';
import Hexagon from 'react-hexagon';

import styles from './styles';

import space from '../../../Home/images/space.gif'

const AttributeIcon = () => {
  return (
    <div style={styles.container}>
      <Hexagon
        backgroundImage={space}
      />
    </div>
  )
}

export default AttributeIcon;
