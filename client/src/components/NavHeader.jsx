import React from 'react';

import styled from 'styled-components'

const NavHeader = styled.div`
	width: 100%;
	height: 50px;

	text-align: start;
	align: center;

	// border-radius: 8px;

	background-color: #ffffff;
`

export default () => {

	return (
		<NavHeader>
			FarmAhead
		</NavHeader>
	)
}