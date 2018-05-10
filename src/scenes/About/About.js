import React from 'react';

import styles from './styles';

import { Header } from '../../components/header';
import { AttributesContainer } from './components/attributes';
import { BioAndSkillsContainer } from './components/bioAndSkills';

const About = () => {
  return(
    <div style={styles.container}>
      <Header
        title={'ABOUT'}
      />
      <AttributesContainer />
      <BioAndSkillsContainer />
    </div>
  )
}

export default About;
