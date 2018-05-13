import React from 'react';

import styles from './styles';
import Flip from 'react-reveal/Flip';

const MessageText = () => {
  return (
    <div style={styles.container}>
      <Flip right>
        <div style={styles.text}>
          {'Currently looking for new challenges and would love to become a part of your team!'}
        </div>
      </Flip>
    </div>
  )
}

export default MessageText
