import {connect} from 'react-redux'
import Dishes from './dishes'




const ConnectedDishes = connect(
    state => (
        {
            dishes: state.dishes
        }
    ),
    null
)(Dishes)

export default ConnectedDishes
