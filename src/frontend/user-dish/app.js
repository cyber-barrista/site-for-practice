import React from 'react'
import Navigation from './navigation'
import ConnectedDishes from './connectedDishes'




const App = (props) => {

    return (
        <div className="app">
            <Navigation/>
            <ConnectedDishes/>
        </div>
    )
}


export default App
