import React from 'react';

import styled from 'styled-components'

const MARGIN_VALUES = {
	'small': '12px',
	'medium': '24px'
}

const _mapMarginToValue = (margin) => {
	// TODO: ability to pass in an object

	return MARGIN_VALUES[margin]
}

const _performPad = (pad, children) => {

	return children.map((child, i) => {
		if (i < (children.length - 1)) {
			return React.cloneElement(child, {key: i, style: {marginRight: _mapMarginToValue(pad.between)}})
		}

		return child
	})
}

export default (props) => {

	const { direction, margin, grow = false, pad = {}, style, children } = props
	let newChildren = (children instanceof Array) && !!children ? children : [children]

	const FlexBox = styled.div`
		display: flex;
		flex-direction: ${direction};

		flex-grow: ${!!grow ? 1 : 0};
		flex-shrink: true;
		flex-basis: auto;

		margin: ${_mapMarginToValue(margin)}
	`

	if (newChildren) newChildren = _performPad(pad, newChildren)

	return (
		<FlexBox style={style}>
			{newChildren}
		</FlexBox>
	)
}