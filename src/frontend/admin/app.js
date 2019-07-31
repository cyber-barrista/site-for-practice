import React from 'react'
import AutForm from './autForm'
import AdminNavigation from './adminNavigation'
import toServerSender from './toServerSender'

const App = (props) => {
    return (
        <div className="logIn">
            <AdminNavigation/>
            <AutForm sender={(user, password) => toServerSender('/admin', 'POST', user, password)}/>
        </div>
    )
}

export default App