import storeFactory from './store-factory'

const  store = storeFactory()

console.log(store.getState(true))



