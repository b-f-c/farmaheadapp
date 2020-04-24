import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default (props) => {
  const { onClose, showModal, title, children } = props

  const closeModal = () => {
    if (onClose) onClose()
  }

  return showModal ? (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      <Modal.Footer>
        <Button variant="success" onClick={closeModal}>
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  ) : null
}
