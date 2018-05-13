import React from 'react';

import styles from './styles';
import Slide from 'react-reveal/Slide';

import { BioContainer } from './components/bio';
import { SkillsContainer } from './components/skills';

const BioAndSkillsContainer = () => {
  return (
    <div style={styles.container}>
      <Slide left ssrReveal>
        <div>
          <BioContainer />
        </div>
      </Slide>

      <Slide right ssrReveal>
        <div>
          <SkillsContainer />
        </div>
      </Slide>
    </div>
  )
};

export default BioAndSkillsContainer;
