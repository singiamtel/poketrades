import styles from './Home.module.css'
import Header from "./header"
import CardGrid from "./card_grid"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FunctionComponent } from 'react';

const Home: FunctionComponent = () => {
	return <div>
		<Header />
		<div className="container">
			<CardGrid />
		</div>
		<Carousel infiniteLoop autoPlay interval={7500} stopOnHover showStatus={false} showThumbs={false}>
			<div className={styles.carousel}>
				<h1>What is Pokétrades?</h1>
				<p>

					PokéTrades is a simple, easy to use web app that helps you keep track of your Pokémon trades. It was designed to be a better alternative to using a Google Sheet to track your trades.
				</p>
			</div>
			<div className={styles.carousel}>

				<h1>Why use Pokétrades?</h1>
				<p>
					PokéTrades is a faster, more organized way to track your Pokémon trades. It is also more user-friendly and easier to use than a Google Sheet, and will help you check the legality of the Pokémon you are trading!
				</p>
			</div>
			<div className={styles.carousel}>

				<h1>Connect with the community</h1>
				<p>
					Join our <a className={styles.link} target="_blank" rel="noreferrer" href="https://discord.com/invite/KapqJKGMRy">Discord server</a> to chat with other users, get support, and more!
				</p>
			</div>
		</Carousel>
	</div>
	// <style global jsx>{`
	// 	html,
	// 		body,
	// 		body > div:first-child,
	// 		div#__next,
	// 		div#__next > div {
	// height: 100%;
	// 		}
	// 	`}</style>
}

export default Home
