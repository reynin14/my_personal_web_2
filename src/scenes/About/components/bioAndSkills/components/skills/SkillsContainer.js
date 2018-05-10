import React from 'react';

import Skill from './Skill';

import styles from './styles';

const SkillsContainer = () => {
  return (
    <div style={styles.skillsContainer}>
      <Skill
        techName={'JavaScript'}
        proficiency={70}
      />
      <Skill
        techName={'ReactJS'}
        proficiency={85}
      />
    </div>
  )
};

export default SkillsContainer;
