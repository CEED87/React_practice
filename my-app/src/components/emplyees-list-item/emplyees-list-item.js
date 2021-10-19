import {Component} from 'react'
import './emplyees-list-item.css'


class EmplyeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prize: false,
            rise: false
        }
    }

     onPrize = () => {
        this.setState(({prize}) => ({
            prize: !prize
        }))
    }

    onRise = () => {
        this.setState(({rise}) => ({
            rise: !rise
        }))
    }

    render(){
        const {name,salary} = this.props;
        const {prize,rise} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between ';
        if (prize) {
         classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
           }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onRise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justyfi-center-center align-items-center">
                    <button className="btn-cookie btn-sm" onClick={this.onPrize}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
    
            </li>
        )
    }
}

export default EmplyeesListItem;