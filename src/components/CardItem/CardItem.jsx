import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleteCard, setFavorite } from "../../store/actions";
import { LuHeart } from "react-icons/lu";
import PropTypes from "prop-types";

import "./CardItem.css";

const CardItem = ({ card }) => {
	const dispatch = useDispatch();

	const removeCardHandler = () => {
		dispatch(deleteCard(card.id));
	};

	const setFavoriteCardHandler = () => {
		dispatch(setFavorite(card.id));
	};

	const likeClass = card.isFavorite ? "card-item__like active" : "card-item__like";

	return (
		<Card style={{ width: "26rem" }}>
			<Card.Img
				variant='top'
				src={card.image}
			/>
			<Card.Body>
				<div className='card-item__content'>
					<div className='card-item__info'>
						<Card.Title>{card.title}</Card.Title>
						<Card.Text>{card.description}</Card.Text>
					</div>
					<div className='card-item__controls'>
						<LuHeart
							className={likeClass}
							onClick={setFavoriteCardHandler}
						/>
						<Button
							variant='danger'
							onClick={removeCardHandler}
							className='xss-hidden'
						>
							Удалить
						</Button>
					</div>
				</div>
				<div className='card-item__button_mobile xss-visible'>
					<Button
						variant='danger'
						onClick={removeCardHandler}
					>
						Удалить
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

CardItem.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool.isRequired,
		image: PropTypes.string,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}).isRequired,
};

export default CardItem;
