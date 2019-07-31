import featch from 'isomorphic-fetch'


const parseResponse = response => {
    return response.json()
}
const logError = error => console.error(error)

const initialStateGeter = (url, callback) => {
    console.log("i'm sending")
    featch(
        url,
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
    ).then(parseResponse).then(callback).catch(logError)
}

export default initialStateGeter