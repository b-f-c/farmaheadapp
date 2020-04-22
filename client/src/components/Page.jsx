import React from 'react'

import FlexBox from './custom/FlexBox'

import NavHeader from './NavHeader'

export default (props) => {
  const { children } = props

  return (
    <FlexBox direction="column" style={{ width: '100%', height: '100%' }}>
      <NavHeader />
      <FlexBox style={{ padding: '12px 12px 12px 12px' }}>
        {children}
      </FlexBox>
    </FlexBox>
  )
}
