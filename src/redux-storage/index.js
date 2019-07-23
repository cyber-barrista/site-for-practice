import storeFactory from './store-factory'
import getState from '../database/geter'
import Reserve from '../database/reserves'
import Dish from '../database/dishes'

/*
Создаём хранилище и убеждаемся, что оно создалось таким, каким ожидалось.
 */
getState(Reserve, Dish).then(
    intialState => {
        const store = storeFactory(true, intialState)
        console.log(store.getState())
    }
)




