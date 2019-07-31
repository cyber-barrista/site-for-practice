import React from 'react'
import AdminNavigation from './adminNavigation'
import ListOfReserves from './listOfReserves'
//import ListReserveShower from './listReserveShower'
//import ReserveShower from './reserveShower'


const App = (props) => {
    return (
        <div className="app">
            <AdminNavigation/>
            <ListOfReserves/>
        </div>
    )
}


export default App