import fetch from 'isomorphic-fetch'


//Функция для удобной отправки формы авторизации на сервер
const toServerSender = (url, method, user, password) => {
    let body = {user, password}

    fetch(
        url,
        {
            method,
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        }
    )
}

export default toServerSender
