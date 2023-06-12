const DashboardLayout = ({children}) => {
    return(
        <div>
            <h1>dashboards</h1>
            <div>
                <NewTodoForm />
            </div>
            <div>{children}</div>
        </div>
    )
}

export default DashboardLayout