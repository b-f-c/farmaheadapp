import React from 'react'

import styled from 'styled-components'
import {
  IoMdCamera,
  IoMdStar,
  IoMdStarHalf,
  IoMdStarOutline,
} from 'react-icons/io'

import FlexBox from '../custom/FlexBox'

const BRAND_COLOR = '#27ae60'

const Card = styled.div`
  border-radius: 5px;
  overflow: hidden;

  background-color: #ffffff;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.2);

  width: 300px;
	height: 350px;
	
	transition: padding-bottom 0.2s;

	&:hover {
		padding-bottom: 15px;
	}
`

const Stars = ({ quantity }) => {
  let baseNumber = Math.round(quantity)

  const stars = [...Array(baseNumber).keys()].map((i) => (
    <IoMdStar color={BRAND_COLOR} key={i} />
  ))
  if (quantity - baseNumber > 0) {
    stars.push(<IoMdStarHalf color={BRAND_COLOR} key="half" />)
    baseNumber += 1
  }
  const remaining = 5 - baseNumber
  if (remaining > 0) {
    ;[...Array(remaining).keys()].forEach((i) =>
      stars.push(<IoMdStarOutline color={BRAND_COLOR} key={i} />)
    )
  }

  return <FlexBox>{stars}</FlexBox>
}

export default (props) => {
  const { title, address, stars } = props

  return (
    <Card>
      <FlexBox
        justify="center"
        align="center"
        style={{
          borderBottom: '1px solid #d9d9d9',
          height: '70%',
          backgroundColor: '#e6e6e6',
        }}
      >
        <IoMdCamera color="#939393" size="2.5em" />
      </FlexBox>
      <FlexBox margin="small">
        <FlexBox direction="column" style={{padding: '12px'}}>
          <FlexBox><b>{title}</b></FlexBox>
          <Stars quantity={stars} />
          <FlexBox style={{ color: '#737373' }}>{address}</FlexBox>
        </FlexBox>
      </FlexBox>
    </Card>
  )
}
