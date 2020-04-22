import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { v4 } from 'uuid'

const MARGIN_VALUES = {
  small: '12px',
  medium: '24px',
}

// TODO: ability to pass in an object
const _mapMarginToValue = (margin) => MARGIN_VALUES[margin]

const _performPad = (pad, children) =>
  children.map((child, i) => {
    if (i < children.length - 1) {
      return React.cloneElement(child, {
        key: v4(),
        style: { marginRight: _mapMarginToValue(pad.between) },
      })
    }

    return child
  })

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.direction};

  flex-grow: ${(props) => (props.theme.grow ? 1 : 0)};
  flex-shrink: ${(props) => (props.theme.shrink ? 1 : 0)};
  flex-basis: auto;

  justify-content: ${(props) => props.theme.justify};
  align-items: ${(props) => props.theme.align};

  margin: ${_mapMarginToValue((props) => props.theme.margin)};
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

  let newChildren =
    children instanceof Array && !!children ? children : [children]

  if (newChildren) newChildren = _performPad(pad, newChildren)

  return (
    <ThemeProvider theme={theme}>
      <FlexBox {...otherProps}>{newChildren}</FlexBox>
    </ThemeProvider>
  )
}
