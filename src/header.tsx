import styles from './header.module.css'
import { FunctionComponent, SyntheticEvent, useState } from 'react'
import LoginPopup from './popup'
import { Link } from 'react-router-dom'

const Header: FunctionComponent = () => {
	const [showPopup, setShowPopup] = useState(false)

	const togglePopup = (e: SyntheticEvent) => {
		e.preventDefault()
		// setShowPopup(!showPopup)
	}

	return <div className={styles.container}>
		{showPopup ?
			<LoginPopup handleClose={togglePopup} />
			:
			undefined
		}
		<Link to="/"><h1 className={styles.title}><strong style={{ color: "white" }}>PokéTrades</strong>: A better way to trade Pokémon!</h1></Link>
		<div className={styles.icons_container}>
			<div className={styles.icon} onClick={togglePopup}><img className={styles.icon_image} src="/Designs/User Icon.png" alt="Login" width="40" height="40" /></div>
			<div className={styles.icon}><a href="https://discord.com/invite/KapqJKGMRy" target="_blank" rel="noreferrer"><img className={styles.icon_image} src="/Designs/Discord Icon.png" alt="Discord logo" width="40" height="40" /></a></div>
		</div>
	</div>
}

export default Header
