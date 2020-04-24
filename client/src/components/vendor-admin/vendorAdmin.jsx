import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

const mapStateToProps = (state) => ({ ...state.user })

const VendorAdmin = () => {
  const { user } = useSelector(mapStateToProps)

  return (
    <Container>
      <Row></Row>
    </Container>
  )
}

export default VendorAdmin
