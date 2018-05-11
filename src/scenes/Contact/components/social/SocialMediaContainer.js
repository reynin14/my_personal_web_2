import React from 'react';

import styles from './styles';

import SocialMedia from './SocialMedia';

import linkedinIcon from './images/linkedinIcon2.png';
import githubIcon from './images/githubIcon2.png';
import instagramIcon from './images/instagramIcon2.jpeg';

const SocialMediaContainer = () => {
  return (
    <div style={styles.socialMediaContainer}>
      <SocialMedia
        icon={linkedinIcon}
        socialLink={'https://www.linkedin.com/in/kevin-yonzon/'}
      />
      <SocialMedia
        icon={githubIcon}
        socialLink={'https://github.com/reynin14'}
      />
      <SocialMedia
        icon={instagramIcon}
        socialLink={'https://www.instagram.com/aykevinrey/'}
      />
    </div>
  )
};

export default SocialMediaContainer;
