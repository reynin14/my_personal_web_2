import React from 'react';

import Skill from './Skill';
import Rotate from 'react-reveal/Rotate';

import styles from './styles';

const SkillsContainer = () => {
  return (
    <Rotate top right cascade ssrReveal>
      <div style={styles.skillsContainer}>

        <div>
          <Skill
            techName={'JavaScript'}
            proficiency={85}
          />
        </div>
        <div>
          <Skill
            techName={'ReactJS'}
            proficiency={90}
          />
        </div>
        <div>
          <Skill
            techName={'React Native'}
            proficiency={80}
          />
        </div>
        <div>
          <Skill
            techName={'Redux'}
            proficiency={85}
          />
        </div>
        <div>
          <Skill
            techName={'Ruby / Rails'}
            proficiency={75}
          />
        </div>
        <div>
          <Skill
            techName={'HTML5'}
            proficiency={80}
          />
        </div>
        <div>
          <Skill
            techName={'CSS3'}
            proficiency={85}
          />
        </div>
        <div>
          <Skill
            techName={'SQL'}
            proficiency={75}
          />
        </div>

      </div>
    </Rotate>
  )
};

export default SkillsContainer;
