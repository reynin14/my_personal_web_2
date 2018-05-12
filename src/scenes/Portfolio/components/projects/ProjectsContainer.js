import React from 'react';

import styles from './styles';

import ProjectSquare from './ProjectSquare';

import CoinSwap from './images/CoinSwap.png'
import Fuggetaboutit from './images/Fuggetaboutit2.png'
import WiFinder from './images/NYCWiFinder2.png'
import FlatironGram from './images/FlatironGram2.png'

const ProjectsContainer = () => {
  return (
    <div style={styles.projectsContainer}>
      <ProjectSquare
        projectPicture={CoinSwap}
        linkToDemo={'https://expo.io/@reynin14/mycurrencyconverter'}
        projectName={'Coin Swap'}
        projectTech={'React, React Native, Redux'}
      />
      <ProjectSquare
        projectPicture={Fuggetaboutit}
        linkToDemo={'http://fuggetaboutit.surge.sh/'}
        projectName={'Fuggetaboutit'}
        projectTech={'React, Redux'}
      />
      <ProjectSquare
        projectPicture={WiFinder}
        linkToDemo={'https://wifinder.surge.sh/'}
        projectName={'FlatironGram'}
        projectTech={'React, Ruby On Rails'}
      />
      <ProjectSquare
        projectPicture={FlatironGram}
        linkToDemo={'https://tranquil-sands-29270.herokuapp.com/'}
        projectName={'FlatironGram'}
        projectTech={'Ruby On Rails'}
      />
    </div>
  )
};

export default ProjectsContainer;
