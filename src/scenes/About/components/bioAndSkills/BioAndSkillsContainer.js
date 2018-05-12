import React from 'react';

import styles from './styles';

import { BioContainer } from './components/bio';
import { SkillsContainer } from './components/skills';

const BioAndSkillsContainer = () => {
  return (
    <div style={styles.container}>
      <BioContainer />
      <SkillsContainer />
    </div>
  )
};

export default BioAndSkillsContainer;
