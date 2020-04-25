import React from 'react'
import { useSelector } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import PageCard from '../page-card'
import Paginate from '../custom/Paginate'

const mapStateToProps = (state) => ({
  ...state.markets,
})

const renderMarketCard = (market) => {
  const { marketName, locationAddress, s3_url, snapStatus, rating } = market

  return (
    <FlexBox shrink>
      <PageCard
        title={marketName}
        stars={rating}
        address={locationAddress}
        imgSrc={s3_url}
        canBeSnapEligible={true}
        snapStatus={snapStatus}
      />
    </FlexBox>
  )
}

const Market = () => {
  const { markets = [] } = useSelector(mapStateToProps)

  return <Paginate objects={markets} renderCard={renderMarketCard} />
}

export default Market
