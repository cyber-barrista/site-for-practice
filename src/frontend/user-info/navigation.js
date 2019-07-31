import React from 'react'

const Navigation = (props) => {
    return (
        <nav>
            <a href="info"> Информация о ресторане </a>|
            <a href="reserve"> Заказ столов </a>|
            <a href="dish"> Меню </a>|
            <a href="admin"> Вход</a>
        </nav>
    )
}

export default Navigation