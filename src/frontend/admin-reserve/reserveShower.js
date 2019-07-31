import React from 'react'

const ReserveShower = (props) => {
    const writeStatus = (status) =>{
        switch (status) {
            case "no" :
                return "Отказ"
            case "wait" :
                return "Ожидание"
            case "yes" :
                return "Одобрение"
            default :
                return "Получен не вкрный статус"
        }
    }

    console.log(props)
    console.log(props.data)
    return (
        <article className="reserveShowForAdmin">
            <h2>Данные заказа</h2>
            <dl>
                <dt>Дата посещения ресторана:</dt>
                <dd>{props.data.eventDate}</dd>
            </dl>

            <dl>
                <dt>Время посещения ресторана</dt>
                <dd>{props.data.eventTime}</dd>
            </dl>

            <dl>
                <dt>Количество гостей</dt>
                <dd>{props.data.quantity}</dd>
            </dl>

            <dl>
                <dt>Контактный телефон</dt>
                <dd>{props.data.phone}</dd>
            </dl>

            <dl>
                <dt>e-mail</dt>
                <dd>{props.data.email}</dd>
            </dl>

            <dl>
                <dt>Статус</dt>
                <dd>{writeStatus(props.data.status)}</dd>
            </dl>

            <h3>Список гостей</h3>

            <ol>
            {
                props.data.visitors.map(
                    (visitor) => {
                        return (
                            <li key={visitor._id} >{visitor.lastName + ' ' + visitor.firstName}</li>
                        )
                    }
                )
            }
            </ol>

        </article>
    )
}


export default ReserveShower