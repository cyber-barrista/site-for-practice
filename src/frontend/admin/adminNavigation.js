import React from 'react'

const AdminNavigation = (props) => {
    return (
        <nav>
            <p>
                Страницы пользователя
                <a href="../info"> Информация о ресторане </a>|
                <a href="../reserve"> Заказ столов </a>|
                <a href="../dish"> Меню </a>|
                <a href="../admin"> Вход</a>
            </p>

            <p>
                Страницы администратора:
            <a href="../admin/info"> Информация о ресторане </a>|
            <a href="../admin/reserve"> Заказ столов </a>|
            <a href="../admin/dish"> Меню </a>|
            <a href="../admin"> Вход</a>
            </p>
        </nav>
    )
}

export default AdminNavigation