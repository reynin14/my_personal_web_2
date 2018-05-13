const PRIMARY_COLOR = '#da0024'
const SHADOW = '3px 3px black'

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: 1,
  marginTop: '80px',
  marginBottom: '20px',
};

const header = {
  top: '1vh',
  font: '70px Raleway',
  color: PRIMARY_COLOR,
  textShadow: SHADOW,
};

const underline = {
  fontFamily: 'Raleway',
  fontSize: '5vh',
  color: PRIMARY_COLOR,
  textShadow: SHADOW,
}

const styles = {
  container,
  header,
  underline,
};

export default styles;
