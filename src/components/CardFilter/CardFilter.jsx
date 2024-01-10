import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import PropTypes, { func } from "prop-types";
import "./CardFilter.css";

const CardFilter = ({ filter, onFilterChange }) => {
	const filterButtons = [
		{ name: "all", label: "Все новости" },
		{ name: "liked", label: "Понравившиеся" },
	];

	const buttons = filterButtons.map(({ name, label }) => (
		<ToggleButton
			key={name}
			id={`tbg-btn-${name}`}
			value={name}
		>
			{label}
		</ToggleButton>
	));
	return (
		<div className='card-filter'>
			<ToggleButtonGroup
				name='filter'
				type='radio'
				value={filter}
				onChange={onFilterChange}
			>
				{buttons}
			</ToggleButtonGroup>
		</div>
	);
};

CardFilter.propTypes = {
	filter: PropTypes.string.isRequired,
	onFilterChange: func.isRequired,
};

export default CardFilter;
