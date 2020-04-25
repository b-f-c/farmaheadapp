/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import PageCard from '../page-card'
import Paginate from '../custom/Paginate'

import { PRODUCE } from '../../constants/globalConstants'

const mapStateToProps = (state) => ({
  ...state.produce,
})

export const renderProduceCard = (produce) => {
  const { produceName, produceType, s3_url } = produce

  return (
    <FlexBox shrink>
      <PageCard
        title={produceName}
        address={produceType}
        imgSrc={s3_url}
        canAddToCart={true}
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
