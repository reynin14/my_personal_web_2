import React from 'react';

import styles from './styles';

import { Header } from '../../components/header';
import { Bio, TechSkills } from './components';
import { AttributeIcon } from './components/attributeIcon';

const About = () => {
  return(
    <div style={styles.container}>
      <Header
        title={'ABOUT'}
      />
      <div style={styles.infoContainer}>
        <AttributeIcon />
        <Bio />
        <TechSkills />
      </div>
    </div>
  )
}

export default About;
