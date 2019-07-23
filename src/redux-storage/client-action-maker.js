import fetch from 'isomorphic-fetch'

const parseResponse = response => response.json()
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
    fetchThenDispatch(
        dispatch,
        url,
        'POST',
        JSON.stringify({eventDate, eventTime, quantity, visitors, phone, email})
    )
}

export  const rateReserve = url => (id, status) => dispatch => {
    fetchThenDispatch(
        dispatch,
        url,
        'PUT',
        JSON.stringify({id, status})
    )
}

export const  addDish = url => (name, smallDescription, fullDescription, recipes, urlOfImage) => dispatch => {
    fetchThenDispatch(
        dispatch,
        url,
        'POST',
        JSON.stringify({name, smallDescription, fullDescription, recipes, urlOfImage})
    )
}

export  const rateDish = url => (name, smallDescription, fullDescription, recipes, urlOfImage) => dispatch => {
    fetchThenDispatch(
        dispatch,
        url,
        'PUT',
        JSON.stringify({name, smallDescription, fullDescription, recipes, urlOfImage})
    )
}
