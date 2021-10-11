import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmplyeesList from '../employees-list/employees-list';
import EmplyeesAddForm from '../emplyees-add-form/emplyees-add-form';

function App() {
    const data = [
        {name: 'Pety M.', salary: 3000, prize: false},
        {name: 'Dima P.', salary: 5000, prize: true},
        {name: 'Vasy B.', salary: 1000, prize: true},
        {name: 'Petyrrr M.', salary: 3000, prize: false}
    ]
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmplyeesList data={data}/>
            <EmplyeesAddForm/>
        </div>
    )
}

export default App