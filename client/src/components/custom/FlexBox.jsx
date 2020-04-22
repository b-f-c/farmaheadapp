import React from 'react';
import styled from 'styled-components'
import { v4 } from 'uuid';

const MARGIN_VALUES = {
  small: '12px',
  medium: '24px',
}

// TODO: ability to pass in an object
const _mapMarginToValue = (margin) => MARGIN_VALUES[margin]

const _performPad = (pad, children) => children.map((child, i) => {
  if (i < (children.length - 1)) {
    return React.cloneElement(child, {
      key: v4(),
      style: { marginRight: _mapMarginToValue(pad.between) },
    })
  }

  return child
})

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

  let newChildren = (children instanceof Array) && !!children ? children : [children]

  const FlexBox = styled.div`
    display: flex;
    flex-direction: ${direction};

    flex-grow: ${grow ? 1 : 0};
    flex-shrink: ${shrink ? 1 : 0};
    flex-basis: auto;

    justify-content: ${justify};
    align-items: ${align};

    margin: ${_mapMarginToValue(margin)}
  `

  if (newChildren) newChildren = _performPad(pad, newChildren)

  return (
    <FlexBox {...otherProps}>
      {newChildren}
    </FlexBox>
  )
}
