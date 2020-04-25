import React from 'react'
import { useSelector } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import PageCard from '../page-card'
import Paginate from '../custom/Paginate'

import { PRODUCE } from '../../constants/globalConstants'

const mapStateToProps = (state) => ({
  ...state.produce,
})

const renderProduceCard = (produce) => {
  const { produceName, locationAddress, uuid } = produce

  return (
    <FlexBox shrink>
      <PageCard
        title={produceName}
        stars={Math.random() * 6}
        address={locationAddress}
      />
    </FlexBox>
  )
}

const Produce = () => {
  const { produce = [] } = useSelector(mapStateToProps)

  return (
    <Paginate page={PRODUCE} objects={produce} renderCard={renderProduceCard} />
  )
}

export default Produce
