import React from "react";
import "./employees-add-form.css";

const EmployeesAddForm = ({ onAdd }) => {
	const { name, setName } = React.useState('');
	const { salary, setSalary } = React.useState('');

	const handleNameChange = (event) => {
		setName(event.target.value);
	}
	const handleSalaryChange = (event) => {
		setSalary(event.target.value);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		onAdd(name, salary);
	}
	return (
		<div className="app-add-form">
			<h3>Добавьте нового сотрудника</h3>
			<form className="add-form d-flex" onSubmit={onSubmit}>
				<input
					type="text"
					className="form-control new-post-label"
					placeholder="ФИО"
					name="name"
					value={name}
					onChange={handleNameChange}
				/>
				<input
					type="text"
					className="form-control new-post-label"
					placeholder="Оклад"
					name="salary"
					value={salary}
					onChange={handleSalaryChange}
				/>
				<button type="submit" className="btn btn-outline-light">
					Добавить
				</button>
			</form>
		</div>
	);
};


export default EmployeesAddForm;
