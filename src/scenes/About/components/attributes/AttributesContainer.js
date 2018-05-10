import React from 'react';

import styles from './styles';

import Attribute from './Attribute';

const AttributesContainer = () => {
  return (
    <div style={styles.mainAttributesContainer}>
      <Attribute
        iconName={'home'}
        keyAdjective={'Fast'}
        description={'Fast load times and lag free interaction, my highest priority.'}
      />
      <Attribute
        iconName={'home'}
        keyAdjective={'Fast'}
        description={'Fast load times and lag free interaction, my highest priority.'}
      />
      <Attribute
        iconName={'home'}
        keyAdjective={'Fast'}
        description={'Fast load times and lag free interaction, my highest priority.'}
      />
      <Attribute
        iconName={'home'}
        keyAdjective={'Fast'}
        description={'Fast load times and lag free interaction, my highest priority.'}
      />
    </div>
  )
}

export default AttributesContainer;
