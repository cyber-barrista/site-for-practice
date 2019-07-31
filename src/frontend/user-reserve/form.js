import {connect} from 'react-redux'
import ReserveForm from './reserveForm'
import {addReserve} from '../../redux-storage/client-action-maker'

const Form = connect(
    null,
    dispatch => {
        return {
            addReserve: (eventDate, eventTime, quantity, visitors, phone, email) => dispatch(addReserve('/reserve')(eventDate, eventTime, quantity, visitors, phone, email))
        }
    }
)(ReserveForm)


export default Form