import background from './images/background.jpg'

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  backgroundColor: '#dfdfdf',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const styles = {
  container,
};

export default styles;
