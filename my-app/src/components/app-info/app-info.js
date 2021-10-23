import './app-info.css'

const AppInfo = ({numEmployees,prize}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников компании EPAM</h1>
            <h2>Общее число сотрудников: {numEmployees}</h2>
            <h2>Премию получат: {prize}</h2>
        </div>
    )
}

export default AppInfo;