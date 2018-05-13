import React from 'react';

import styles from './styles';
import Pulse from 'react-reveal/Pulse';

const MessageText = () => {
  return (
    <div style={styles.container}>
      <Pulse ssrReveal>
        <div style={styles.text}>
          {'Currently looking for new opportunities and would love to become a part of your team!'}
        </div>
      </Pulse>
    </div>
  )
}

export default MessageText
