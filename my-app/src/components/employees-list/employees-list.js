import './employees-list.css'
import EmplyeesListItem from "../emplyees-list-item/emplyees-list-item";

const EmplyeesList = ({data}) => {

    const elements = data.map(item => {
        return <EmplyeesListItem name={item.name} salary={item.salary} prize={item.prize}/>
    })

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmplyeesList;