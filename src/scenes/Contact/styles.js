import kyCrossing from './images/kyCrossing2.JPG';

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  backgroundImage: `url(${kyCrossing})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: '0% 30%',
}

const styles = {
  container,
};

export default styles;
