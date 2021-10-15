import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmplyeesList from '../employees-list/employees-list';
import EmplyeesAddForm from '../emplyees-add-form/emplyees-add-form';

function App() {
    const data = [
        {name: 'Pety M.', salary: 3000, prize: false, key: 1},
        {name: 'Dima P.', salary: 5000, prize: true, key: 2},
        {name: 'Vasy B.', salary: 1000, prize: true, key: 3},
        {name: 'Petyrrr M.', salary: 3000, prize: false, key: 4}
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