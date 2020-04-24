import React from 'react'
import { useSelector } from 'react-redux'

import { v4 } from 'uuid'
import { Col, Row } from 'react-bootstrap'

import PageCard from '../page-card'

const mapStateToProps = (state) => ({
	...state.produce,
})

const ROW_SIZE = 6

const Produce = () => {
  const { produce } = useSelector(mapStateToProps)

  const produceCards = []
  produce.forEach((item, idx) => {
    const { produceName, locationAddress } = item
    produceCards.push(
      <Col key={v4()}>
        <PageCard
          title={produceName}
          stars={Math.random() * 6}
          address={locationAddress}
        />
      </Col>
    )

    // Every 4th item render a full sized div to separate items
    if ((idx + 1) % ROW_SIZE === 0) {
      produceCards.push(<div key={v4()} className="w-100" />)
    }
  })

  return <Row>{produceCards}</Row>
}

export default Produce