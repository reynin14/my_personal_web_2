const CONTAINER_HEIGHT = '300px';
const CONTAINER_WIDTH = '400px';

const projectsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px'
};

const projectSquareMainContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '25px',
}

const projectSquareContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: CONTAINER_WIDTH,
  height: CONTAINER_HEIGHT,
  backgroundColor: '#ffffff',
}

const projectImage = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: CONTAINER_WIDTH,
  height: CONTAINER_HEIGHT,
}

const projectTitleContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: CONTAINER_WIDTH,
  height: CONTAINER_HEIGHT,
  backgroundColor: 'grey'
}

const projectTitle = {
  margin: '15px',
  font: 'Raleway',
  fontSize: '18pt',
  fontWeight: '900',
}

const projectTech = {
  font: 'Raleway',
  fontsize: '12pt',
}

const demoButton = {
  margin: '10px',
}

const styles = {
  projectsContainer,
  projectSquareMainContainer,
  projectSquareContainer,
  projectImage,
  projectTitleContainer,
  projectTitle,
  projectTech,
  demoButton,
};

export default styles;
