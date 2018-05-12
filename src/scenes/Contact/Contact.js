import React from 'react';

import styles from './styles';

import { Header } from '../../components/header';
import { SocialMediaContainer } from './components/social';
import { Email } from './components/social';
import { MessageText } from './components/messageText';

const Contact = () => {
  return(
    <div style={styles.container}>
      <Header
        title={'CONTACT'}
      />
      <MessageText />
      <Email />
      <SocialMediaContainer />
    </div>
  )
};

export default Contact
