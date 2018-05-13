const CONTAINER_HEIGHT = '300px';
const CONTAINER_WIDTH = '400px';

const projectsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px',
  width: '85%'
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
  objectFit: 'contain',
}

const projectTitleContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: CONTAINER_WIDTH,
  height: CONTAINER_HEIGHT,
  backgroundColor: 'white'
}

const projectTitle = {
  margin: '15px',
  font: 'Raleway',
  fontSize: '18pt',
  fontWeight: '900',
  color: 'black',
}

const projectTech = {
  font: 'Raleway',
  fontSize: '12pt',
  color: 'red',
}

const demoButton = {
  margin: '10px',
}

const buttonText = {
  font: 'Raleway',
  fontSize: '12pt',
  color: 'white',
  fontWeight: '700',
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
  buttonText,
};

export default styles;
