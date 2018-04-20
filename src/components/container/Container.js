import React from 'react';
import PropTypes from 'prop-types';

import styles  from './styles';

const Container = ({children, backgroundColor}) => {
	const containerStyle = [styles.container];

	if (backgroundColor){
    containerStyle.push({ backgroundColor })
  }

	return (
		<div style={containerStyle}>
			{children}
		</div>
	)
};

Container.propTypes = {
	children: PropTypes.any,
	backgroundColor: PropTypes.string,
}

export default Container;
