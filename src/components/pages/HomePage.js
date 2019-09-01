import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Title from '../Title.js'
import InfografisCard from '../InfografisCard'

const HomePage = props => {
	if(!localStorage.getItem('token')) document.getElementById('login').click()

	return (
		<>
			<Title title={ props.title } />
			<Row>
				{ props.data.map((d, i) => 
					<Col key={ i } md={ i < 2 ? 6 : 4 } style={{ marginBottom: '2rem' }}><InfografisCard data={ d } /></Col>
				) }
			</Row>
		</>
	)
}
export default HomePage