import React from 'react'
import styled from 'styled-components'

import FlexBox from '../custom/FlexBox'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { IoIosLeaf } from 'react-icons/io'

const NavHeader = styled.div`
  width: 100%;
  max-height: 62px;

  display: flex;
  justify-content: start;
  align-items: center;

  z-index: 100;

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
      <FlexBox
        justify="center"
        align="center"
        direction="row"
        style={{ paddingLeft: '12px', height: '95%' }}
      >
        <LinkContainer to="market">
          <Button className='Nav-buttons' variant='outline-success'>Markets</Button>
        </LinkContainer>
        <LinkContainer to="vendor">
          <Button className='Nav-buttons' variant='outline-success'>Vendors</Button>
        </LinkContainer>
        <LinkContainer to="produce">
          <Button className='Nav-buttons' variant='outline-success'>Produce</Button>
        </LinkContainer>
      </FlexBox>
    </NavHeader>
  )
}
