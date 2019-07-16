import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reserves, dishes} from './storage-converters'
import {writeJSON, readJSON} from  './local-state-writer'

/*
 Здесь определяется и дефолтно экспортируется фабрика хранилищ. Код изоморфный, в первый аргумет фабрики передаётся true если хранилище предполоает использование на сервере и false если у клиента. Второй аргумент передаёт путь (от корневого каталога) к .json хранилищу состояния. Переданный .json инициирует начальное состояние.
 Для клиента предусмотрена thunk версия для синхронизации с серверным хранилищем
 */

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

const middleware = server => [
    (server) ? serverLogger : clientLogger, thunk
]

const saver = path => store => next => action => {
    let result = next(action)
    writeJSON(path, store.getState())
    return result
}

const storeFactory = (server = false, path = './src/redux-storage/state.json') =>
    applyMiddleware(...middleware(server), saver(path))(createStore)(
        combineReducers({reserves, dishes}),
        readJSON(path)
    )
export default storeFactory
