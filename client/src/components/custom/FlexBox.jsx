import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const MARGIN_VALUES = {
  small: '12px',
  medium: '24px',
}

const _mapMarginToValue = (margin) => {
	return MARGIN_VALUES[margin]
}

const _performPad = (pad, direction, children) => {

	if (pad.between) {
		return children.map((child, i) => {
			if (i < children.length - 1) {
	
				let style 
				if (direction == 'row') {
					style = { marginRight: _mapMarginToValue(pad.between) }
				} else {
					style = { marginBottom: _mapMarginToValue(pad.between) }
				}
	
				return React.cloneElement(child, {
					key: i,
					style
				})
			}
	
			return child
		})
	}

	return children
}

  

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.direction};

  flex-grow: ${(props) => (props.theme.grow ? 1 : 0)};
  flex-shrink: ${(props) => (props.theme.shrink ? 1 : 0)};
  flex-basis: auto;

  justify-content: ${(props) => props.theme.justify};
  align-items: ${(props) => props.theme.align};

	margin: ${_mapMarginToValue((props) => props.theme.margin)};
	padding: ${_mapMarginToValue((props) => props.theme.pad)};
`

export default (props) => {
  const {
    direction,
    margin,
    grow = false,
    shrink = false,
    pad = {},
    justify = 'start',
    align = 'start',
    children,
    ...otherProps
  } = props

  const theme = {
    direction,
    grow,
    shrink,
    justify,
    align,
    margin,
  }

  let newChildren = children instanceof Array && !!children ? children : [children]

  if (newChildren) newChildren = _performPad(pad, direction, newChildren)

  return (
    <ThemeProvider theme={theme}>
      <FlexBox {...otherProps}>{newChildren}</FlexBox>
    </ThemeProvider>
  )
}
