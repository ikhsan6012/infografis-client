import React from 'react'
import Title from '../Title.js'

const WPBaruBayar = props => {
	if(!localStorage.getItem('test')) window.location.pathname = '/login'

	return (
		<>
			<Title title={ props.title } />
		</>
	)
}
export default WPBaruBayar