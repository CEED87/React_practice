import './employees-list.css'
import EmplyeesListItem from "../emplyees-list-item/emplyees-list-item";

const EmplyeesList = ({data,onDelete}) => {

    const elements = data.map(item => {
        const {id, ...allItem} = item;

        return <EmplyeesListItem key = {id} {...allItem} onDelete={() => onDelete(id)}/>
    })

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmplyeesList;