import React from 'react'
import AdminNavigation from './adminNavigation'
import {ConnectedDishes, ConnectedAddDish} from './contenerComponent'



const App = (props) => {

    return (
        <div className="app">
            <AdminNavigation/>
            <ConnectedDishes/>
            <ConnectedAddDish/>
        </div>
    )
}


export default App
