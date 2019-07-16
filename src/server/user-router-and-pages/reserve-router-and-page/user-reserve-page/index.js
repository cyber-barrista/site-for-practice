import  React from 'react'
import {render} from 'react-dom'
import App from './app.js'

window.React = React

render(
    <App name="Danil"/>,
    document.getElementById("react-container")
)

