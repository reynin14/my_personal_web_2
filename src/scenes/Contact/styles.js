import kyCrossing from './images/kyCrossing.JPG';

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '1200px',
  width: '100vw',
  backgroundImage: `url(${kyCrossing})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: '50% 30%',
}

const styles = {
  container,
};

export default styles;
