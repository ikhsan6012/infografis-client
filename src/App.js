import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import KepatuhanWPBaru from './components/pages/KepatuhanWPBaru'
import EkstraEffortEkstensifikasi from './components/pages/EkstraEffortEkstensifikasi'
import PenambahanWPBaru from './components/pages/PenambahanWPBaru'
import WPBaruBayar from './components/pages/WPBaruBayar'
import Geotagging from './components/pages/Geotagging'

const App = () => {  
	const data = [
		{ title: 'Kepatuhan WP Baru', path: '/kepatuhan-wp-baru', component: KepatuhanWPBaru },
		{ title: 'Ekstra Effort Ekstensifikasi', path: '/ekstra-effort-ekstensifikasi', component: EkstraEffortEkstensifikasi },
		{ title: 'Penambahan WP Baru', path: '/penambahan-wp-baru', component: PenambahanWPBaru },
		{ title: 'WP Baru Bayar', path: '/wp-baru-bayar', component: WPBaruBayar },
		{ title: 'Geotagging', path: '/geotagging', component: Geotagging },
  ]
  
  return (
    <Router>
      <Navbar data={ data }/>
      <Main data={ data }/>
    </Router>
  )
}
export default App