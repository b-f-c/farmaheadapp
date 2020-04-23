import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import { Col, Row } from 'react-bootstrap'
import * as marketsActions from '../../redux/actions/markets/marketsActions'
import MarketCard from '../MarketCard'
import Page from '../Page'

const mapStateToProps = (state) => ({
  ...state.markets,
})

const ROW_SIZE = 6

const Markets = () => {
  const { markets } = useSelector(mapStateToProps)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(marketsActions.fetchMarkets())
  }, [])

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

  return (
    <Page>
      <Row>{marketCards}</Row>
    </Page>
  )
}

export default Markets
