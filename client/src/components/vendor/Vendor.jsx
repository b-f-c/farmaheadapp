import React from 'react'
import { useSelector } from 'react-redux'

import Paginate from '../custom/Paginate'
import VendorCard from './VendorCard'

const mapStateToProps = (state) => ({
  ...state.vendors,
})

const Vendor = () => {
  const { vendors = [] } = useSelector(mapStateToProps)

  return <Paginate objects={vendors} renderCard={VendorCard} />
}

export default Vendor
