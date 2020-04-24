import React from 'react'
import { useSelector } from 'react-redux'

import { v4 } from 'uuid'
import { Col, Row } from 'react-bootstrap'

import PageCard from '../page-card'

const mapStateToProps = (state) => ({
	...state.vendors,
})

const ROW_SIZE = 6

const Vendor = () => {
	const { vendors } = useSelector(mapStateToProps)

	const vendorCards = []
	vendors.forEach((vendor, idx) => {
		const { vendorName, locationAddress } = vendor
		vendorCards.push(
			<Col key={v4()}>
				<PageCard
					title={vendorName}
					stars={Math.random() * 6}
					address={locationAddress}
				/>
			</Col>
		)

		// Every 4th item render a full sized div to separate items
		if ((idx + 1) % ROW_SIZE === 0) {
			vendorCards.push(<div key={v4()} className="w-100" />)
		}
	})
	
	return <Row>{vendorCards}</Row>
}

export default Vendor
