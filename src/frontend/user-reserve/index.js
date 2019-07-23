import 'babel-polyfill'
import  React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import storeFactory from '../../redux-storage/store-factory'
import App from './app.js'
import date from '../../database/testDate'

window.React = React

const store = storeFactory(false, date)
console.log(store.getState())

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("react-container"))

