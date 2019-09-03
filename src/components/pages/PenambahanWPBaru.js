import React from 'react'
import Title from '../Title.js'

const PenambahanWPBaru = props => {
	if(!localStorage.getItem('test')) window.location.pathname = '/login'
	
	return (
		<>
			<Title title={ props.title } />
		</>
	)
}
export default PenambahanWPBaru