import React from 'react';
import PropTypes from 'prop-types';

import styles  from './styles';

const Container = ({children}) => {
	const containerStyle = [styles.container];

	return (
		<div style={containerStyle}>
			{children}
		</div>
	)
};

Container.propTypes = {
	children: PropTypes.any,
}

export default Container;
