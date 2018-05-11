import React from 'react';

import styles from './styles';

import FlatironGram from './images/FlatironGram2.png'

import ProjectSquare from './ProjectSquare';

const ProjectsContainer = () => {
  return (
    <div style={styles.projectsContainer}>
      <ProjectSquare
        projectPicture={FlatironGram}
        linkToDemo={'https://tranquil-sands-29270.herokuapp.com/'}
        projectName={'FlatironGram'}
        projectTech={'Ruby On Rails'}
      />
      <ProjectSquare
        projectPicture={FlatironGram}
        linkToDemo={'https://tranquil-sands-29270.herokuapp.com/'}
        projectName={'FlatironGram'}
        projectTech={'Ruby On Rails'}
      />
      <ProjectSquare
        projectPicture={FlatironGram}
        linkToDemo={'https://tranquil-sands-29270.herokuapp.com/'}
        projectName={'FlatironGram'}
        projectTech={'Ruby On Rails'}
      />
      <ProjectSquare
        projectPicture={FlatironGram}
        linkToDemo={'https://tranquil-sands-29270.herokuapp.com/'}
        projectName={'FlatironGram'}
        projectTech={'Ruby On Rails'}
      />
    </div>
  )
};

export default ProjectsContainer;
