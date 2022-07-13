import React from "react";
import "./app-filter.css";
const AppFilter = () => {

	const [allButton, setAllButton] = React.useState(true);
	const [riseButton, setRiseButton] = React.useState(false);
	const [salaryButton, setSalaryButton] = React.useState(false);


	const setButtonsNotActive = () => {
		setAllButton(false);
		setRiseButton(false);
		setSalaryButton(false);
	}
	const resetFilters = () => {
		setButtonsNotActive();
		setAllButton(true);
	}
	const allButtonClick = () => {
		setButtonsNotActive();
		setAllButton(true);
	}
	const riseButtonClick = () => {
		setButtonsNotActive();
		setRiseButton(true);
	}
	const salaryButtonClick = () => {
		setButtonsNotActive();
		setSalaryButton(true);
	}

	return (
		<div className="btn-group">
			<button className={`btn ${allButton ? 'btn-light' : 'btn-outline-light'}`}
				type="button" onClick={allButtonClick}>
				Все сотрудники
			</button>
			<button className={`btn ${riseButton ? 'btn-light' : 'btn-outline-light'}`}
				type="button" onClick={riseButtonClick}>
				Сотрудники на повышение
			</button>
			<button className={`btn ${salaryButton ? 'btn-light' : 'btn-outline-light'}`}
				type="button" onClick={salaryButtonClick}>
				Зарплата больше $1000
			</button>
			<button className="btn btn-warning"
				type="button" onClick={resetFilters}>
				Сбросить фильтр
			</button>
		</div>
	);
};
export default AppFilter;
