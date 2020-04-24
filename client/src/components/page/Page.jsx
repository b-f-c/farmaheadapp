import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import FlexBox from '../custom/FlexBox'
import NavHeader from '../nav-header'

import { fetchPageInfo } from '../../redux/actions/markets/page/pageActions'

export default (props) => {
  const { children, page } = props
  const dispatch = useDispatch()

  useEffect(() => {
    // Check redux store to see if list is already grabbed. If empty, dispatch action
    dispatch(fetchPageInfo(page))
  }, [page])

  // Populate Typeahead component with data returned from redux store
  return (
    <FlexBox direction="column" style={{ width: '100%', height: '100%' }}>
      <NavHeader />
      <FlexBox grow style={{ padding: '24px', width: '100%' }}>
				{children}
			</FlexBox>
    </FlexBox>
  )
}
