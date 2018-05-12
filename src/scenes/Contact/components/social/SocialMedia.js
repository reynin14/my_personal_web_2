import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const SocialMedia = ({ icon, socialLink }) => {
  return (
    <div style={styles.soloSocialContainer}>
      <a href={socialLink} target="_blank"><img src={icon} style={styles.icon} alt='Link to social media'/></a>
    </div>
  )
};

SocialMedia.propTypes = {
  icon: PropTypes.string.isRequired,
  socialLink: PropTypes.string,
}

export default SocialMedia
