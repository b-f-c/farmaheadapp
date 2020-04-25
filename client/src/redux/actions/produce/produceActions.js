import Axios from 'axios'
import { PRODUCT_REQUESTED, PRODUCE_RECEIVED } from './produceActionTypes'
import { MOCK_VENDOR_ID } from '../../../constants/mockedConstants'

export const produceRequested = () => ({ type: PRODUCT_REQUESTED })

export const produceReceived = (produceData) => ({
  type: PRODUCE_RECEIVED,
  produceData,
})

export const fetchProduceByVendor = () => {
  return (dispatch) => {
    dispatch(produceRequested())

    Axios.get(
      `${process.env.REACT_APP_REST_URL}/vendor/${MOCK_VENDOR_ID}/produce`
    )
      .then((response) => {
        dispatch(produceReceived(response.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
