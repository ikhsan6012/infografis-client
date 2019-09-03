import React from 'react'
import Title from '../Title.js'

const Geotagging = props => {
	if(!localStorage.getItem('token')) window.location.pathname = '/login'

	return (
		<>
			<Title title={ props.title } />
		</>
	)
}
export default Geotagging