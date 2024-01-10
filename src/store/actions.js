import { DELETE_CARD, LOAD_CARDS_DATA, SET_FAVORITE_CARD } from "./actionTypes";

export const loadCards = cards => {
	return { type: LOAD_CARDS_DATA, payload: { cards } };
};

export const deleteCard = id => {
	return { type: DELETE_CARD, payload: { id } };
};

export const setFavorite = id => {
	return { type: SET_FAVORITE_CARD, payload: { id } };
};
