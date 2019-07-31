import 'babel-polyfill'
import  React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import storeFactory from '../../redux-storage/store-factory'
import App from './app.js'
import initialStateGeter from '../../redux-storage/client-initial-state-geter'

window.React = React

const callback = initialState => {
    const store = storeFactory(false, initialState)

    console.log(store.getState())

    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById("react-container"))

}

initialStateGeter('/initialState', callback)

