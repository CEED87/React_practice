
import './emplyees-list-item.css'


const EmplyeesListItem = (props) => {

    const {name,salary,onDelete,onToggleProp,prize,rise} = props;
    let classNames = 'list-group-item d-flex justify-content-between ';
        
    if (prize) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
        }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-togle="rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justyfi-center-center align-items-center">
                 <button className="btn-cookie btn-sm" onClick={onToggleProp} data-togle="prize">
                    <i className="fas fa-cookie"></i>
                </button>
                <button className="btn-trash btn-sm" onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
    
        </li>
    )
}

export default EmplyeesListItem;