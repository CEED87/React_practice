import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmplyeesList from '../employees-list/employees-list';
import EmplyeesAddForm from '../emplyees-add-form/emplyees-add-form';

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmplyeesList/>
            <EmplyeesAddForm/>
        </div>
    )
}

export default App