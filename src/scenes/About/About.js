import React from 'react';

import styles from './styles';

import { Header } from '../../components/header';
import { Bio, TechSkills } from './components';
import { AttributesContainer } from './components/attributes';

const About = () => {
  return(
    <div style={styles.container}>
      <Header
        title={'ABOUT'}
      />
      <div style={styles.infoContainer}>
        <AttributesContainer />
      </div>
    </div>
  )
}

export default About;
