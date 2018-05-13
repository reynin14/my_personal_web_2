import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Skill = ({ techName, proficiency }) => {

  const proficiencyCalculated = (600 * (proficiency / 100)) - 100

  const progressStyle = Object.assign({width: `${proficiencyCalculated}px`}, styles.progress);

  return (
    <div style={styles.soloSkillContainer}>
      <div style={styles.techName}>
        <span style={styles.text}>{`${techName}`}</span>
      </div>
      <span style={progressStyle}></span>
      <div style={styles.percentage}>
        {`${proficiency}%`}
      </div>
    </div>
  )
};

Skill.propTypes = {
  techName: PropTypes.string,
  proficiency: PropTypes.number,
}

export default Skill;
