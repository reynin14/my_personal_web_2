import React from 'react';

import styles from './styles';
import Flip from 'react-reveal/Flip';

import Attribute from './Attribute';

const AttributesContainer = () => {
  return (
    <Flip left cascade ssrReveal>
      <div style={styles.mainAttributesContainer}>
        <div>
          <Attribute
            iconName={'home'}
            keyAdjective={'Fast'}
            description={'Fast load times and lag free interaction, my highest priority.'}
          />
        </div>
        <div>
          <Attribute
            iconName={'home'}
            keyAdjective={'Fast'}
            description={'Fast load times and lag free interaction, my highest priority.'}
          />
        </div>
        <div>
          <Attribute
            iconName={'home'}
            keyAdjective={'Fast'}
            description={'Fast load times and lag free interaction, my highest priority.'}
          />
        </div>
        <div>
          <Attribute
            iconName={'home'}
            keyAdjective={'Fast'}
            description={'Fast load times and lag free interaction, my highest priority.'}
          />
        </div>
      </div>
    </Flip>
  )
}

export default AttributesContainer;
