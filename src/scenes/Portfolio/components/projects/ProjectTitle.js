import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const ProjectTitle = ({ projectName, projectTech }) => {
  return (
    <div style={styles.projectTitleContainer}>
      <div style={styles.projectTitle}>
        {projectName}
      </div>
      <div style={styles.projectTech}>
        {projectTech}
      </div>
    </div>
  )
};

ProjectTitle.propTypes = {
  projectName: PropTypes.string,
  projectTech: PropTypes.string,
}

export default ProjectTitle;
