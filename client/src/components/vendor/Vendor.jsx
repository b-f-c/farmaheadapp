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
  const { vendorName, locationAddress, uuid } = vendor

  return (
    <FlexBox shrink>
      <PageCard
        title={vendorName}
        stars={Math.random() * 6}
        address={locationAddress}
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
