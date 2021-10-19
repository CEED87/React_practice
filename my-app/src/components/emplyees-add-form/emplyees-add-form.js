import { Component } from 'react'
import './emplyees-add-form.css'

class EmplyeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onChangevalue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, salary} = this.state;
        const {addWorker} = this.props;
        return (
            <div className="add-app-form">
                <h3>Дабавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        onChange={this.onChangevalue}
                        name="name"
                        value={name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        onChange={this.onChangevalue}
                        name="salary"
                        value={salary}/>
                    <button type="submit" 
                        className="btn btn-outline-light" onClick={() => addWorker(name,salary)}>Добавить</button>
                </form>
            </div>
        )
    }
    
}

export default EmplyeesAddForm