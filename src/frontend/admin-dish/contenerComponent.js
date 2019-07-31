import {connect} from 'react-redux'
import Dishes from './dishes'
import AddDish from './addDish'
import {addDish, rateDish} from '../../redux-storage/client-action-maker'


export const ConnectedDishes = connect(
    state => (
        {
            dishes: state.dishes
        }
    ),
    dispatch => (
        {
            rateDish: (_id, name, smallDescription, fullDescription, recipes, urlOfImage) => dispatch(rateDish('/admin/dish')(_id, name, smallDescription, fullDescription, recipes, urlOfImage))
        }
    )
)(Dishes)

export const ConnectedAddDish = connect(
    null,
    dispatch => (
        {
            addDish: (name, smallDescription, fullDescription, recipes, urlOfImage) => dispatch(addDish('/admin/dish')(name, smallDescription, fullDescription, recipes, urlOfImage))
        }
    )
)(AddDish)
