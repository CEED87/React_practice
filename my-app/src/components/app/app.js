import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmplyeesList from '../employees-list/employees-list';
import EmplyeesAddForm from '../emplyees-add-form/emplyees-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Pety M.', salary: 3000, prize: false, rise: false, id: 1},
                {name: 'Dima P.', salary: 5000, prize: true, rise: false, id: 2},
                {name: 'Vasy B.', salary: 1000, prize: false, rise: false, id: 3},
                {name: 'Petyrrr M.', salary: 3000, prize: false, rise: true, id: 4}
            ],
            term: '',
            filter: 'all'
        }
        this.newId = 5;
    }

    onDeleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addNewWorker = (name,salary) => {
        const newWorker = {
            name: name,
            salary: salary,
            prize: false,
            rise: false,
            id: this.newId++
        }
        if (name !== '' && salary !== '') {
            this.setState(({data}) => {
            const newArr = [...data, newWorker]
          return {
              data: newArr
          }  
        })
        }
        
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
           return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'morethen1000': 
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilter = (filter) => {
        this.setState({filter})
    }


    render() {
        const {data, term, filter} = this.state
        const employees = this.state.data.length
        const prize = this.state.data.filter(item => 
            item.prize 
        ).length
        const visiblData = this.filterPost(this.searchEmp(data, term), filter) 

        return (
            <div className="app">
                <AppInfo numEmployees={employees} prize={prize}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilter={this.onFilter}/>
                </div>
                <EmplyeesList data={visiblData}
                              onDelete={this.onDeleteItem}
                              onToggleProp={this.onToggleProp}
                              />
                <EmplyeesAddForm addWorker={this.addNewWorker}/>
            </div>
        )
    }
    
    
}

export default App