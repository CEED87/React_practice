import './employees-list.css'
import EmplyeesListItem from "../emplyees-list-item/emplyees-list-item";

const EmplyeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmplyeesListItem/>
            <EmplyeesListItem/>
            <EmplyeesListItem/>
        </ul>
    )
}

export default EmplyeesList;