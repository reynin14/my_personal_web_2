import space from './images/space.gif';

const container = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#1ae4de',
	height: '100vh',
	width: '100vw',
	backgroundImage: `url(${space})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
};

const text = {
	color: 'white',
	backgroundColor: 'blue',
	textAlign: 'center',
	fontFamily: 'Raleway',
	fontSize: '6vh',
}

const name = {
	color: 'red',
}

const styles = {
  container,
	text,
	name,
}

export default styles;
