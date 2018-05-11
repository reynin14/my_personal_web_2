import React from 'react';

import styles from './styles';

import emailIcon from './images/emailIcon2.png';
import SocialMedia from './SocialMedia';

const Email = () => {
  return (
    <div style={styles.emailContainer}>
      <SocialMedia
        icon={emailIcon}
      />
      <div style={styles.emailText}>
        {'kyonzon14@gmail.com'}
      </div>
    </div>
  )
};

export default Email;
