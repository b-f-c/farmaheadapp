import React from 'react'
import { withRouter, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import FlexBox from '../custom/FlexBox'

const BRAND_COLOR = '#27ae60'

const StyledBox = styled(FlexBox)`
	font-size: 1.1em;
	font-weight: ${props => props.matches ? 'bold' : undefined};
	color: ${props => props.matches ? BRAND_COLOR : 'rgba(0, 0, 0, 0.7)'};

	&:hover {
		color: ${BRAND_COLOR}
	}
`

const routeMatches = (currentRoute, thisRoute) => {
	// this may require fancier logic later on
	return currentRoute === `/${thisRoute}`
}

export default withRouter((props) => {

	const { history, destination, title, ...otherProps } = props

	const { pathname } = useLocation()
	const matches = routeMatches(pathname, destination)

	return (
		<StyledBox {...otherProps} matches={matches} onClick={() => {history.push(destination)}}>
			{title}
		</StyledBox>
	)
})