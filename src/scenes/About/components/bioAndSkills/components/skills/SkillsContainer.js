import React from 'react';

import Skill from './Skill';

import styles from './styles';

const SkillsContainer = () => {
  return (
    <div style={styles.skillsContainer}>
      <Skill
        techName={'JavaScript'}
        proficiency={85}
      />
      <Skill
        techName={'ReactJS'}
        proficiency={90}
      />
      <Skill
        techName={'React Native'}
        proficiency={80}
      />
      <Skill
        techName={'Redux'}
        proficiency={85}
      />
      <Skill
        techName={'Ruby / Rails'}
        proficiency={75}
      />
      <Skill
        techName={'HTML5'}
        proficiency={75}
      />
      <Skill
        techName={'CSS3'}
        proficiency={75}
      />
      <Skill
        techName={'SQL'}
        proficiency={70}
      />
    </div>
  )
};

export default SkillsContainer;
