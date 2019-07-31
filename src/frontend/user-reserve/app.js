import React from 'react'
import Form from './form'
import Navigation from './navigation'

const App = (props) => {
    return (
        <div className="app">
            <Navigation/>
            <Form />
        </div>
    )
}


export default App