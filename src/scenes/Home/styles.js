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
	textAlign: 'center',
	fontFamily: 'Raleway',
	fontSize: '6vh',
	lineHeight: '1',
	padding: '10px'
}

const name = {
	color: 'red',
}

const icon = {
	marginLeft: '10px'
}

const styles = {
  container,
	text,
	name,
	icon
}

export default styles;
