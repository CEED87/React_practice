import './employees-list.css'
import EmplyeesListItem from "../emplyees-list-item/emplyees-list-item";

const EmplyeesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...allItem} = item;

        return <EmplyeesListItem key = {id} {...allItem}/>
    })

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmplyeesList;