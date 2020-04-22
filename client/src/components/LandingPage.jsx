import React from 'react'

import { IoIosLeaf } from 'react-icons/io'
import FlexBox from './custom/FlexBox'

import LoginRegister from './LoginRegister'


const LandingPage = () => (
  <FlexBox justify="center" align="center" style={{ width: '100%', height: '100%' }}>
    <FlexBox
      justify="center"
      align="center"
      style={{
        width: '300px', height: '200px', backgroundColor: '#ffffff', borderRadius: '5px', boxShadow: '0px 2px 4px 1px rgba(0, 0, 0, 0.2)',
      }}
    >
      <FlexBox direction="column" justify="center" align="center">
        <FlexBox justify="center" align="center" direction="row" style={{ paddingLeft: '12px' }}>
          <IoIosLeaf size="1.2em" color="#27ae60" />
          <FlexBox style={{ fontSize: '1.5em', paddingLeft: '4px' }}>
            <b>Farm</b>
            Ahead
          </FlexBox>
        </FlexBox>
        <FlexBox>
          <LoginRegister />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  </FlexBox>
)

export default LandingPage
