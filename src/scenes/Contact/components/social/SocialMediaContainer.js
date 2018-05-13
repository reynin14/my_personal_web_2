import React from 'react';

import styles from './styles';
import Roll from 'react-reveal/Roll';

import SocialMedia from './SocialMedia';

import linkedinIcon from './images/linkedinIcon2.png';
import githubIcon from './images/githubIcon2.png';
import instagramIcon from './images/instagramIcon2.jpeg';

const SocialMediaContainer = () => {
  return (
    <Roll bottom cascade>
      <div style={styles.socialMediaContainer}>
        <div>
          <SocialMedia
            icon={linkedinIcon}
            socialLink={'https://www.linkedin.com/in/kevin-yonzon/'}
          />
        </div>
        <div>
          <SocialMedia
            icon={githubIcon}
            socialLink={'https://github.com/reynin14'}
          />
        </div>
        <div>
          <SocialMedia
            icon={instagramIcon}
            socialLink={'https://www.instagram.com/aykevinrey/'}
          />
        </div>
      </div>
    </Roll>
  )
};

export default SocialMediaContainer;
