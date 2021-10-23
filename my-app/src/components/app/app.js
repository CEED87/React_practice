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
            ]
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

    render() {
        const {data} = this.state
        const employees = this.state.data.length
        const prize = this.state.data.filter(item => 
            item.prize 
        ).length

        return (
            <div className="app">
                <AppInfo numEmployees={employees} prize={prize}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmplyeesList data={data}
                              onDelete={this.onDeleteItem}
                              onToggleProp={this.onToggleProp}
                              />
                <EmplyeesAddForm addWorker={this.addNewWorker}/>
            </div>
        )
    }
    
    
}

export default App