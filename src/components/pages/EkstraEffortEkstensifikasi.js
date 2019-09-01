import React from 'react'
import Title from '../Title.js'

const EkstraEffortEkstensifikasi = props => {
	if(!localStorage.getItem('token')) window.location.pathname = '/login'
	
	return (
		<>
			<Title title={ props.title } />
		</>
	)
}
export default EkstraEffortEkstensifikasi