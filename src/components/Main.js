import React from 'react'
import { Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import HomePage from './pages/HomePage'
import Login from './pages/Login'

const Main = props => {
	return(
		<Container>
			<Route exact path="/" component={ () => <HomePage title="Home" data={ props.data }/> } />
			<Route exact path="/login" component={ () => <Login title="Login"/> } />
			{ props.data.map((d, i) => <Route key={ i } exact path={ d.path } component={ () => <d.component title={ d.title }/> }/>) }
		</Container>
	)
}
export default Main