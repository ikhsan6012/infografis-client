import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const InfografisCard = props =>
	<Card bg="light">
		<Card.Body>
			<div className="text-center">
				<Link to={ props.data.path } className="text-dark card-title h5">{ props.data.title }</Link>
			</div>
			<h1 className="text-center">100%</h1>
		</Card.Body>
	</Card>
export default InfografisCard