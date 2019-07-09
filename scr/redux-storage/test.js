import {reserves, dishes} from './storage-converters'
import initialStage from './initial-state'
import  constants from './constants'

var state = []

var action1 = {
    type: constants.ADD_RESERV,
    id: "480830jffnf8",
    eventDate: "13.34.34",
    eventTime: "12.34",
    quantity: 1,
    visitors: [
        {
            id: "123",
            firstName: "Дорофеев",
            lastName: "Иван",
        }
    ],
    phone: 89081443379,
    email: "hsdiugs",
    status: "wait"
}

var state1 = reserves(state, action1)

var action2 = {
    type: constants.RATE_RESERV,
    id: "480830jffnf8",
    status: "yes",
}

console.log(constants.RATE_RESERV)
console.log(reserves(state1, action2))

var action3 = {
    type: constants.ADD_DISH,
    id: "1",
    name: "hsfk",
    smallDescription: "fshjvd",
    fullDescription: "kushfdk",
    recipes: [
        {
            id: "1",
            ingredient: "fjf",
            amount: 24,
            unit: "jks"
        },
        {
            id: "2",
            ingredient: "fjf",
            amount: 24,
            unit: "jks"
        }
    ],
    urlOfImage: "vjsd"
}

var state2 = dishes(state,action3)
var action4 = {
    type: constants.RATE_DISH,
    id: "1",
    name: "hsfk",
    smallDescription: "fshjvd",
    fullDescription: "kushfdk",
    recipes: [
        {
            id: "1",
            ingredient: "fjf",
            amount: 2400,
            unit: "jks"
        },
        {
            id: "2",
            ingredient: "fjf",
            amount: 2400,
            unit: "jks"
        }
    ],
    urlOfImage: "vjsd"
}
console.log(state2,action4)