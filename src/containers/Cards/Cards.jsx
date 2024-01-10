import { useDispatch, useSelector } from "react-redux";
import CardList from "../../components/CardList/CardList";
import { useEffect, useState } from "react";
import fetchCards from "../../store/asyncActions";

const Cards = () => {
	const [filter, setFilter] = useState("all");

	const dispatch = useDispatch();
	const cards = useSelector(state => state.cards);

	const filteredCards =
		filter === "liked" ? cards.filter(card => card.isFavorite === true) : cards;

	useEffect(() => {
		dispatch(fetchCards());
	}, []);

	const filterChangeHandler = value => {
		setFilter(value);
	};

	return (
		<CardList
			cards={filteredCards}
			filter={filter}
			onFilterChange={filterChangeHandler}
		/>
	);
};

export default Cards;
