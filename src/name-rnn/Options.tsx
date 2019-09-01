import React, { ChangeEvent, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface OptionsProps {
	temperature: number;
	changeTemperature: (temp: ChangeEvent<HTMLInputElement>) => void;
}

export default function Options(props: OptionsProps) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Button variant="primary" onClick={handleShow}>Options</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton={true}>
					<Modal.Title>Options</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>temperature: {props.temperature / 10}</p>
					<input
						className="custom-range"
						type="range"
						min="1"
						max="20"
						value={props.temperature}
						onChange={props.changeTemperature}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
