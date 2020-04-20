import React from 'react';

import styled from 'styled-components'

import FlexBox from './custom/FlexBox'

const Card = styled.div`

	border-radius: 5px;

	background-color: #ffffff;
	box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);

	width: 300px;
	height: 350px;
`

export default (props) => {

	const { title, address } = props

	return (
		<Card>
			<FlexBox style={{borderBottom: '1px solid #d9d9d9', height: '60%'}} />
			<FlexBox grow margin='small'>
				<FlexBox direction='column'>
					<FlexBox ><b>{title}</b></FlexBox>
					<FlexBox style={{color: '#737373'}}>{address}</FlexBox>
				</FlexBox>
			</FlexBox>
		</Card>
	)
}