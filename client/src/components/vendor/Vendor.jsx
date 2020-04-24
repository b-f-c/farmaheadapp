import React from 'react'
import { useSelector } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import PageCard from '../page-card'
import Paginate from '../custom/Paginate'

const mapStateToProps = (state) => ({
  ...state.vendors,
})

const renderVendorCard = (vendor) => {
	const { vendorName, locationAddress } = vendor

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
		<Paginate objects={vendors} renderCard={renderVendorCard} />
	)
}

export default Vendor
