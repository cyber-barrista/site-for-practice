import React from 'react'
import {render} from 'react-dom'
import App from './app'

window.React = React

render(
    <App/>,
    document.getElementById("react-container")
)
