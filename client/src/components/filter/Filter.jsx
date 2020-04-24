import React, { useState } from 'react'

import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'
import RangeSlider from 'react-bootstrap-range-slider'

export default () => {
	const [validated, setValidated] = useState(false)
	const [sliderValue, setSliderValue] = useState(5)

  const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.currentTarget
		console.log('form values are: ', event)
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
	}
	
	const sliderChangeHandler = (event) => {
		setSliderValue(event.target.value)
	}

	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Form.Row>
				<Form.Group md="3" controlId="zipCodeInput">
					<Form.Control type="text" placeholder="Filter by zip code" required />
					<Form.Control.Feedback type="invalid">
						Please provide a valid zip.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId="sliderInput">
					<Form.Label>Distance (in miles)</Form.Label>
					<RangeSlider value={sliderValue} onChange={sliderChangeHandler} />
				</Form.Group>
				<Button type="submit">Submit form</Button>
			</Form.Row>
		</Form>
	)
}