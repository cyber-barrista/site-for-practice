import constants from './constants'

/*
Чистые функции преобразователи для хранилища
 */

export const reserves = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_RESERV:
            return [
                ...state,
                reserve({},action)
            ]
        case constants.RATE_RESERV:
            return state.map(
                (res) => reserve(res,action)
            )
        default:
            return state
    }
}


export const dishes = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_DISH:
            return [
                ...state,
                dish({},action)
            ]
        case constants.RATE_DISH:
            return state.map(
                (d) =>dish(d,action)
            )
        default:
            return state
    }
}


const reserve = (state = {}, action) => {
    switch (action.type) {
        case constants.ADD_RESERV:
            console.log('here')
            return {
                id: action.id,
                evantDate: action.eventDate,
                eventTime: action.eventTime,
                quantity: action.quantity,
                visitors: action.visitors,
                phone: action.phone,
                email: action.email,
                status: "no",
            }
        case constants.RATE_RESERV:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    status: action.status,
                }
        default:
            return state
    }
}


const dish = (state = {}, action) => {
    switch (action.type) {
        case constants.RATE_DISH:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    name: action.name,
                    smallDescription: action.smallDescription,
                    fullDescription: action.fullDescription,
                    recipe: recipes(state.recipe, action),
                    urlOfImage: action.urlOfImage,
                }
        case constants.ADD_DISH:
            return {
                id: action.id,
                name: action.name,
                smallDescription: action.smallDescription,
                fullDescription: action.fullDescription,
                recipes: action.recipes,
                urlOfImage: action.urlOfImage,
            }
        default:
            return state
    }
}


const recipes = (state = [], action) => {
    switch (action.type) {
        case constants.RATE_DISH:
            return state.map(
                (ing) => recipe(ing, action)
            )
        default:
            return state
    }

}


const recipe = (state = {}, action) => {
    switch (action.type) {
        case constants.RATE_DISH:
            let result
            for (let recipe of action.recipes) {
                if (state.id == recipe.id) {
                    result = {
                        ingredient: recipe.ingredient,
                        amount: recipe.amount,
                        unit: recipe.unit,
                    }
                }
            }
            if (result !== undefined) {
                return result
            }
        default:
            return state
    }
}

