import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


function App() {

	const data = [
		{ name: 'Марат Ибрагимов', salary: 1500, increase: true, id: 1 },
		{ name: 'Евгений Лазебный', salary: 900, increase: false, id: 2 },
		{ name: 'Ирина Зеева', salary: 1200, increase: false, id: 3 },
		{ name: 'Дарья Ибрагимова', salary: 1500, increase: false, id: 4 },
		{ name: 'Елена Ибрагимова', salary: 900, increase: true, id: 5 },
		{ name: 'Сергей Шестопалов', salary: 1200, increase: false, id: 6 },
		{ name: 'Сергей Подольцев', salary: 850, increase: false, id: 7 },
		{ name: 'Илья Гонтмахер', salary: 900, increase: true, id: 8 },
		{ name: 'Сергей Романченко', salary: 1200, increase: false, id: 9 },

	];
	return (
		<div className='app'>
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>
	)
}

export default App;