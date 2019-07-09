import {createStore, combineReducers, applyMiddleware} from 'redux'
import {reserves, dishes} from './storage-converters'
import {writeJSON, readJSON} from  './local-state-writer'


const clientLogger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const serverLogger = store => next => action => {
    console.log('/n dispatching server action')
    console.log(action)
    console.log('/n')
    return next(action)
}

const middleware = server =>
    (server) ? serverLogger : clientLogger

const saver = store => next => action => {
    let result = next(action)
    writeJSON(path, store.getState())
    return result
}

const storeFactory = (server = false, path = './scr/redux-storage/state.json') =>
    applyMiddleware(middleware, saver)(createStore)(
        combineReducers({reserves, dishes}),
        readJSON(path)
    )
export default storeFactory
