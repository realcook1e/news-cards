import { LOAD_CARDS_DATA, SET_FAVORITE_CARD, DELETE_CARD } from "./actionTypes";

const initialState = {
	cards: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_CARDS_DATA:
			return { ...state, cards: [...state.cards, ...action.payload.cards] };
		case DELETE_CARD:
			return { ...state, cards: state.cards.filter(card => card.id !== action.payload.id) };
		case SET_FAVORITE_CARD:
			return {
				...state,
				cards: state.cards.map(card => {
					if (card.id === action.payload.id) {
						return { ...card, isFavorite: !card.isFavorite };
					}
					return card;
				}),
			};
		default:
			return state;
	}
};

export default reducer;
