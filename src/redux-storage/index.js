import storeFactory from './store-factory'

/*
Создаём хранилище и убеждаемся, что оно создалось таким, каким ожидалось.
 */

const  store = storeFactory()

console.log(store.getState(true))



