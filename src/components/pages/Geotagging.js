import React from 'react'
import Title from '../Title.js'

const Geotagging = props => {
	if(!localStorage.getItem('token')) document.getElementById('login').click()

	return (
		<>
			<Title title={ props.title } />
		</>
	)
}
export default Geotagging