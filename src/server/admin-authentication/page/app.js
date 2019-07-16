import React from 'react'
import AutForm from './autForm'
import toServerSender from './toServerSender'

const App = (props) => {
    return (
        <AutForm sender={(user, password) => toServerSender('/admin', 'POST', user, password)}/>
    )
}

export default App