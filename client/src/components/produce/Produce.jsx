/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import PageCard from '../page-card'
import Paginate from '../custom/Paginate'

const mapStateToProps = (state) => ({
  ...state.produce,
})

export const renderProduceCard = (produce) => {
  const { produceName, locationAddress, s3_url } = produce

  return (
    <FlexBox shrink>
      <PageCard
        title={produceName}
        stars={Math.random() * 5}
        address={locationAddress}
        imgSrc={s3_url}
      />
    </FlexBox>
  )
}

const Produce = () => {
  const { produce = [] } = useSelector(mapStateToProps)

  return <Paginate objects={produce} renderCard={renderProduceCard} />
}

export default Produce
