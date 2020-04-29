import React from 'react'
import { useSelector } from 'react-redux'

import MarketCard from './MarketCard'
import Paginate from '../custom/Paginate'

const mapStateToProps = (state) => ({
  ...state.markets,
})

const Market = () => {
  const { markets = [] } = useSelector(mapStateToProps)

  return <Paginate objects={markets} renderCard={MarketCard} />
}

export default Market
