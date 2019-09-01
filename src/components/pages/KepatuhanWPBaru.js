import React from 'react'
import Title from '../Title.js'

const KepatuhanWPBaru = props => {
	if(!localStorage.getItem('test')) return window.location.pathname = '/login'
	
	return (
		<>
			<Title title={ props.title } />
		</>
	)
}
export default KepatuhanWPBaru