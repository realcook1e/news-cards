import { loadCards } from "./actions";

const fetchCards = () => {
	return async dispatch => {
		const res = await fetch(
			"https://cors-anywhere.herokuapp.com/http://api.mediastack.com/v1/news?access_key=3f608b310d17bea85f8965547be7885f&limit=20&languages=en"
		);
		const json = await res.json();
		const data = json.data.map(card => ({
			id: card.url,
			title: card.title,
			description: card.description,
			image: card.image,
			isFavorite: false,
		}));

		dispatch(loadCards(data));
	};
};

export default fetchCards;
