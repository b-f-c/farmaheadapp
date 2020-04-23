import React from 'react'
import { useSelector } from 'react-redux'

import { v4 } from 'uuid'
import { Col, Row } from 'react-bootstrap'

import MarketCard from '../market-card'

const mapStateToProps = (state) => ({
  ...state.markets,
})

const ROW_SIZE = 6

const Market = () => {
  const { markets } = useSelector(mapStateToProps)

  const marketCards = []
  markets.forEach((market, idx) => {
    const { marketName, locationAddress } = market
    marketCards.push(
      <Col key={v4()}>
        <MarketCard
          title={marketName}
          stars={Math.random() * 6}
          address={locationAddress}
        />
      </Col>
    )

    // Every 4th item render a full sized div to separate items
    if ((idx + 1) % ROW_SIZE === 0) {
      marketCards.push(<div key={v4()} className="w-100" />)
    }
  })

  return <Row>{marketCards}</Row>
}

export default Market
