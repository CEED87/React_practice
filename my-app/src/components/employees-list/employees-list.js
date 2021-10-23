import './employees-list.css'
import EmplyeesListItem from "../emplyees-list-item/emplyees-list-item";

const EmplyeesList = ({data,onDelete,onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...allItem} = item;

        return <EmplyeesListItem key = {id}
                                 {...allItem} 
                                 onDelete={() => onDelete(id)}
                                 onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-togle'))}
                                 />
    })

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmplyeesList;