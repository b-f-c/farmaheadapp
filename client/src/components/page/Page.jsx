import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import NavHeader from '../NavHeader'

import { fetchPageInfo } from '../../redux/actions/markets/page/pageActions'
import { Typeahead } from 'react-bootstrap-typeahead'

export default (props) => {

	const { children, page } = props
	const dispatch = useDispatch()

	useEffect(() => {
		// Check redux store to see if list is already grabbed. If empty, dispatch action
		dispatch(fetchPageInfo(page))
	}, [])

	// Populate Typeahead component with data returned from redux store
	return (
		<FlexBox direction='column' style={{width: '100%', height: '100%'}}>
			<NavHeader />
			{/* <Typeahead
			
			/> */}
			<FlexBox style={{padding: '12px 12px 12px 12px'}}>
				{children}
			</FlexBox>
		</FlexBox>
	)
}