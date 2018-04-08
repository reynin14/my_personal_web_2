import React from 'react';
import styles  from './styles';

const Container = ({children}) => {
	const containerStyle = [styles.container];

	return (
		<div style={containerStyle}>
			{children}
		</div>
	)
};

export default Container;
