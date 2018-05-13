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
            iconName={'rocket'}
            keyAdjective={'Dynamic'}
            description={'Quick learner, always able to adapt myself to different situations.'}
          />
        </div>
        <div>
          <Attribute
            iconName={'lightning'}
            keyAdjective={'Enthusiastic'}
            description={'Consistently keeping up positive energy and outlook.'}
          />
        </div>
        <div>
          <Attribute
            iconName={'dashboard'}
            keyAdjective={'Driven'}
            description={'Will always put in the time and work necessary to achieve a goal.'}
          />
        </div>
        <div>
          <Attribute
            iconName={'warning sign'}
            keyAdjective={'Ambitious'}
            description={'Not shy when it comes to new challenges.'}
          />
        </div>
      </div>
    </Flip>
  )
}

export default AttributesContainer;
