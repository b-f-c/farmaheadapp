import React from 'react'
import { useSelector } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import PageCard from '../page-card'
import Paginate from '../custom/Paginate'

import { VENDOR } from '../../constants/globalConstants'

const mapStateToProps = (state) => ({
  ...state.vendors,
})

const renderVendorCard = (vendor) => {
  const { vendorName, locationAddress, s3_url, snapStatus, rating } = vendor

  return (
    <FlexBox shrink>
      <PageCard
        title={vendorName}
        stars={rating}
        address={locationAddress}
        imgSrc={s3_url}
        snapStatus={snapStatus}
        canBeSnapEligible={true}
      />
    </FlexBox>
  )
}

const Vendor = () => {
  const { vendors = [] } = useSelector(mapStateToProps)

  return (
    <Paginate page={VENDOR} objects={vendors} renderCard={renderVendorCard} />
  )
}

export default Vendor
