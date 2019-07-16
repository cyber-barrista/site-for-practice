import React from 'react'


//Компонент для отображения формы авторизации
const AutForm = ({sender = f => f}) => {
    let user, password

    const submit = e => {
        e.preventDefault()
        sender(user.value, password.value)
    }

    return (
        <form onSubmit={submit}>
            <p><input type="text" placeholder="Имя пользователя" ref = {input => user = input} required/></p>
            <p><input type="password" placeholder="Пароль" ref = {input => password = input} required/></p>
            <button>Войти</button>
        </form>
    )
}

export default AutForm