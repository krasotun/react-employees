import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';


function App() {

	const data = [
		{ name: 'Марат Ибрагимов', salary: 1500, increase: false },
		{ name: 'Евгений Лазебный', salary: 900, increase: true },
		{ name: 'Ирина Зеева', salary: 1200, increase: false },

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