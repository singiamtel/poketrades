import { FunctionComponent, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import styles from './card.module.css'

export type CardProps = {
	description: string
	title: string
	image: string
	link: string
}

const Card: FunctionComponent<CardProps> = ({ description, title, image, link }) => {
	const handleClick = (e: SyntheticEvent) => {
		e.preventDefault()
		if (!link) return
		// router.push(link)
	}
	return <div className={styles.bigContainer} onClick={handleClick}>
		<Link to={link}>
		<div className={styles.container}>
			<div className={styles.separator}></div>
			{image ?
				<div className={styles.bottom_container}>
					<div className={styles.title}><h2>{title}</h2></div>
					<div className={styles.image}><img src={image} alt="tmp" width="100" height="100" className={styles.image} /></div>
				</div>
				:
				<div className={styles.title}>{title}</div>
			}
			<div className={styles.description}>
				{description}
			</div>
		</div>
		</Link>
	</div>
}

export default Card
