import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Title from '../Title.js'

const Login = props => {
	if(localStorage.getItem('test')) window.location.pathname = '/'
	
	return (
		<>
			<Title title={ props.title } />
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card bg="light">
						<Card.Body>
							<Card.Title className="text-center">Silahkan Login</Card.Title>
							<hr/>
							<Form>
								<Form.Group controlId="username">
									<Form.Label>Username</Form.Label>
									<Form.Control type="text" placeholder="Masukkan Username" />
								</Form.Group>
								<Form.Group controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Masukkan Password" />
								</Form.Group>
								<Button variant="primary" type="submit">Submit</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}
export default Login