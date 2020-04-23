import React from 'react'
import styled from 'styled-components'

import FlexBox from '../custom/FlexBox'

import { IoIosLeaf } from 'react-icons/io'

const NavHeader = styled.div`
  width: 100%;
  height: 62px;

  display: flex;
  justify-content: start;
  align-items: center;

  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`

export default () => {
  return (
    <NavHeader>
      <FlexBox
        justify="center"
        align="center"
        direction="row"
        style={{ paddingLeft: '12px' }}
      >
        <IoIosLeaf size={'1.2em'} color={'#27ae60'} />
        <FlexBox style={{ fontSize: '1.5em', paddingLeft: '4px' }}>
          <b>Farm</b>Ahead
        </FlexBox>
      </FlexBox>
    </NavHeader>
  )
}
