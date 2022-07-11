import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "Марат Ибрагимов", salary: 1500, increase: true, rise: true, id: 1 },
				{ name: "Евгений Лазебный", salary: 900, increase: false, rise: false, id: 2 },
				{ name: "Ирина Зеева", salary: 1200, increase: false, rise: false, id: 3 },
				{ name: "Дарья Ибрагимова", salary: 1500, increase: false, rise: false, id: 4 },
				{ name: "Елена Ибрагимова", salary: 900, increase: true, rise: false, id: 5 },
				{ name: "Сергей Шестопалов", salary: 1200, increase: false, rise: false, id: 6 },
				{ name: "Сергей Подольцев", salary: 850, increase: false, rise: false, id: 7 },
				{ name: "Илья Гонтмахер", salary: 900, increase: true, rise: false, id: 8 },
				{ name: "Сергей Романченко", salary: 1200, increase: false, rise: false, id: 9 },
				{ name: "Елена Свиноиващенко", salary: 90, increase: false, rise: false, id: 10 },
			],
			term: ''
		}
		this.maxId = 11;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem]
			return {
				data: newArr
			}
		});
	}

	onToggleIncrease = (id) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, increase: !item.increase }
				}
				return item
			})
		}))
	}
	onToggleRise = (id) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, rise: !item.rise }
				}
				return item
			})
		}))
	}
	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		})
	}

	onUpdateSearch = (term) => {
		this.setState({ term });
	}

	render() {
		const { data, term } = this.state;
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.searchEmp(data, term);

		return (
			<div className="app" >
				<AppInfo
					employees={employees}
					increased={increased}
				/>
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter />
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRise}
				/>
				<EmployeesAddForm
					onAdd={this.addItem}
				/>
			</div>
		);
	}
}

export default App;
