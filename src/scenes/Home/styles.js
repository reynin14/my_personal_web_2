import kyHome from './images/kyHomeReverse.JPG';

const container = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100vh',
	width: '100vw',
	backgroundImage: `url(${kyHome})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
};

const text = {
	position: 'absolute',
	color: 'white',
	textAlign: 'center',
	fontFamily: 'Raleway',
	fontSize: '6vh',
	lineHeight: '1',
	padding: '10px',
	top: '25vh',
	textShadow: '2px 2px black',
}

const name = {
	color: 'red',
}

const icon = {
	marginLeft: '10px'
}

const buttonText = {
	color: 'black',
}

const styles = {
  container,
	text,
	name,
	icon,
	buttonText,
}

export default styles;
