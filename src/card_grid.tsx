import styles from './card_grid.module.css'
import Card, { CardProps } from './card'

const cards: CardProps[] = [
	{
		title: "CTS",
		description: "Search for any Pokémon",
		image: "/Designs/CTS Icon.png",
		link: "/CTS"
	},
	{
		title: "Search shop",
		description: "Create, edit or view shops",
		image: "/Designs/TradeShop Icon.png",
		link: ""
	},
	{
		title: "Pokémon data",
		description: "See Pokémon abilities, moves, items, etc.",
		image: "/Designs/Pokemon_Data Icon.png",
		link: ""
	},
	{
		title: "Import your Pokémon",
		description: "Import your trading sheet",
		image: "/Designs/Import Icon.png",
		link: ""
	},
	{
		title: "Giveaways",
		description: "Join giveaways and win Pokémon for free",
		image: "/Designs/Piplup.png",
		link: ""
	},
]
const CardGrid = () => {
	return <div className={styles.container}>
		{cards.map((card, index) => {
			return <Card key={index} title={card.title} description={card.description} image={card.image} link={card.link} />
		})}
	</div>
}

export default CardGrid
