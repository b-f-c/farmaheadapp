import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import NavHeader from '../nav-header'
import PageCard from '../page-card'
import { fetchProduceByVendor } from '../../redux/actions/produce/produceActions'
import Paginate from '../custom/Paginate'
import { renderProduceCard } from '../produce/Produce'

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.produceByVendor,
})

const VendorAdmin = () => {
  const { user, produceByVendor } = useSelector(mapStateToProps)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduceByVendor())
  }, [])

  return (
    <div>
      <NavHeader />
      <Container>
        <Row>
          <Col>
            <h3>Manage your markets</h3>
          </Col>
          <Col>
            <Paginate
              objects={produceByVendor}
              renderCard={renderProduceCard}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VendorAdmin
