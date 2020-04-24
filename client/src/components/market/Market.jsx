import React from 'react'
import { useSelector } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import MarketCard from '../market-card'
import Paginate from '../custom/Paginate'

const mapStateToProps = (state) => ({
  ...state.markets,
})

const renderMarketCard = (market) => {
	const { marketName, locationAddress } = market

	return (
		<FlexBox shrink>
			<MarketCard
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
		<Paginate objects={markets} renderCard={renderMarketCard} />
	)
}

export default Market
