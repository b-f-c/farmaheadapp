import React from 'react';
import styled from 'styled-components'

import FlexBox from './custom/FlexBox'

const NavHeader = styled.div`
	width: 100%;
	height: 50px;

	display: flex;
	justify-content: start;
	align-items: center;

	box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
	background-color: #ffffff;
`

export default () => {

	return (
		<NavHeader>
			<FlexBox style={{fontSize: '1.5em', paddingLeft: '12px'}} ><b>FarmAhead</b></FlexBox>
		</NavHeader>
	)
}