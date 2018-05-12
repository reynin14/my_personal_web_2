import React from 'react';
import PropTypes from 'prop-types';

import { Reveal, Button } from 'semantic-ui-react';

import styles from './styles';

import ProjectTitle from './ProjectTitle';

const ProjectSquare = ({ projectPicture, linkToDemo, projectName, projectTech }) => {

  return (
    <div style={styles.projectSquareMainContainer}>
      <div style={styles.projectSquareContainer}>
        <Reveal animated='small fade'>
          <Reveal.Content visible>
            <img src={projectPicture} style={styles.projectImage} alt='Visible'/>
          </Reveal.Content>
          <Reveal.Content hidden>
            <ProjectTitle
              projectName={projectName}
              projectTech={projectTech}
            />
          </Reveal.Content>
        </Reveal>
      </div>
      <div style={styles.demoButton}>
        <a href={linkToDemo} target="_blank"><Button basic inverted color='red' size='medium'><span style={styles.buttonText}>Demo</span></Button></a>
      </div>
    </div>
  )
};

ProjectSquare.propTypes = {
  projectPicture: PropTypes.string.isRequired,
  linkToDemo: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectTech: PropTypes.string.isRequired,
}

export default ProjectSquare;
