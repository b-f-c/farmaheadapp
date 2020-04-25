import React from 'react'
import { useSelector } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import PageCard from '../page-card'
import Paginate from '../custom/Paginate'

import { MARKET } from '../../constants/globalConstants'

const mapStateToProps = (state) => ({
  ...state.markets,
})

const renderMarketCard = (market) => {
  const { marketName, locationAddress, uuid } = market

  return (
    <FlexBox shrink>
      <PageCard
        title={marketName}
        stars={Math.random() * 6}
        address={locationAddress}
      />
    </FlexBox>
  )
}

const Market = () => {
  const { markets = [] } = useSelector(mapStateToProps)

  return (
    <Paginate page={MARKET} objects={markets} renderCard={renderMarketCard} />
  )
}

export default Market
