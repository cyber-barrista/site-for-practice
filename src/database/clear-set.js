import deleteState from './deleter'
import setState from './seter'

const delAndSetState = async (obj, reserveModel, dishModel) => {
    //await deleteState(reserveModel, dishModel)
    setState(obj, reserveModel, dishModel)
}

export default delAndSetState