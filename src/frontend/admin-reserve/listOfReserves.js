import {connect} from 'react-redux'
import ListReserveShower from './listReserveShower'
import {rateReserve} from '../../redux-storage/client-action-maker'

const ListOfReserves = connect(
    state => {
        return {
            reserves: state.reserves
        }
    },
    dispatch => {
        return {
            rateReserve: (_id, status) => dispatch(rateReserve('/admin/reserve')(_id, status))
        }
    }
)(ListReserveShower)

export default ListOfReserves