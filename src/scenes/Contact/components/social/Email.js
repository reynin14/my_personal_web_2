import React from 'react';

import styles from './styles';
import Slide from 'react-reveal/Slide';

import emailIcon from './images/emailIcon2.png';
import SocialMedia from './SocialMedia';

const Email = () => {
  return (
    <div style={styles.emailContainer}>
      <Slide right>
        <SocialMedia
          icon={emailIcon}
        />
        <div style={styles.emailText}>
          {'kyonzon14@gmail.com'}
        </div>
      </Slide>
    </div>
  )
};

export default Email;
