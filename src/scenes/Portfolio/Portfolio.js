import React from 'react';

import styles from './styles'

import { ProjectsContainer } from './components/projects';
import { Header } from '../../components/header'

const Portfolio = () => {
  return(
    <div style={styles.container}>
      <Header
        title={'Portfolio'}
      />
      <ProjectsContainer />
    </div>
  )
}

export default Portfolio;
