import CardFilter from "../CardFilter/CardFilter";
import CardItem from "../CardItem/CardItem";
import PropTypes from "prop-types";
import "./CardList.css";

const CardList = ({ cards, filter, onFilterChange }) => {
	return (
		<div className='card-list'>
			<h1>Список новостей</h1>
			<CardFilter
				filter={filter}
				onFilterChange={onFilterChange}
			/>
			<div className='card-list__items'>
				{cards.length > 0 ? (
					cards.map(card => (
						<CardItem
							key={card.id}
							card={card}
						/>
					))
				) : (
					<div className='card-list__empty'>Новости отсутствуют</div>
				)}
			</div>
		</div>
	);
};

CardList.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object).isRequired,
	filter: PropTypes.string.isRequired,
	onFilterChange: PropTypes.func.isRequired,
};

export default CardList;
