import fetch from 'isomorphic-fetch'

const parseResponse = response => {
    console.log('json принят')
    return response.json()
}
const logError = error => console.error(error)

const fetchThenDispatch = (dispatch, url, method, body) => {
    fetch(
        url,
        {
            method,
            body,
            headers: {'Content-Type': 'application/json'}
        }
    ).then(parseResponse).then(dispatch).catch(logError)
}

export const addReserve = url => (eventDate, eventTime, quantity, visitors, phone, email) => dispatch => {
    let body = {eventDate, eventTime, quantity, visitors, phone, email}

    console.log(body)
    fetchThenDispatch(
        dispatch,
        url,
        'POST',
        JSON.stringify(body)
    )
}

export  const rateReserve = url => (_id, status) => dispatch => {
    let body = {_id, status}

    console.log(body)
    fetchThenDispatch(
        dispatch,
        url,
        'PUT',
        JSON.stringify(body)
    )
}

export const  addDish = url => (name, smallDescription, fullDescription, recipes, urlOfImage) => dispatch => {
    let body ={name, smallDescription, fullDescription, recipes, urlOfImage}

    console.log(body)
    fetchThenDispatch(
        dispatch,
        url,
        'POST',
        JSON.stringify(body)
    )
}

export  const rateDish = url => (_id, name, smallDescription, fullDescription, recipes, urlOfImage) => dispatch => {
    let body = {_id, name, smallDescription, fullDescription, recipes, urlOfImage}

    console.log(body)
    fetchThenDispatch(
        dispatch,
        url,
        'PUT',
        JSON.stringify(body)
    )
}
