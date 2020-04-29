/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import PageCard from '../page-card'
import Paginate from '../custom/Paginate'

const mapStateToProps = (state) => ({
  ...state.produce,
})

export const renderProduceCard = (props) => {
  const { produceName, produceType, s3_url } = props.obj

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

  return <Paginate objects={produce} renderCard={renderProduceCard} />
}

export default Produce
