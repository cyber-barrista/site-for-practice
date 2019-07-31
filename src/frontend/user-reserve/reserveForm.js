import React from 'react'
import PropTypes from 'prop-types'
import {v4} from 'uuid'

class ReserveForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eventDate: '',
            eventTime: '',
            quantity: '',
            visitors: [],
            phone: '',
            email: ''
        }

        this.submit = this.submit.bind(this)
        this.simpleInputChange = this.simpleInputChange.bind(this)
        this.quantityInputChange = this.quantityInputChange.bind(this)
        this.visitorInputChange = this.visitorInputChange.bind(this)
    }

    submit(event) {
        const {eventDate, eventTime, quantity, visitors, phone, email} = this.state
        const {addReserve} = this.props

        event.preventDefault()
        addReserve(eventDate, eventTime, quantity, visitors, phone, email)
        window.alert('Ваша заявка принята, ожидайте ответа.')
        this.setState(
            {
                eventDate: '',
                eventTime: '',
                quantity: '',
                visitors: [],
                phone: '',
                email: ''
            }
        )

    }

    simpleInputChange(event) {
        const name = event.target.name
        const value = event.target.value

        this.setState(
            {
                [name]: value
            }
        )
    }

    quantityInputChange(event) {
        const name = event.target.name
        const value = event.target.value

        var visitors = []

        for (let i = 0; i < value; i++) {
            visitors.push(
                {
                    _id: v4(),
                    firstName: '',
                    lastName: ''
                }
            )
        }

        this.setState({
            [name]: value,
            visitors
        })
    }

    visitorInputChange(event) {
        const name = event.target.name
        const value = event.target.value

        const idSelector = id => obj => obj._id === id

        if (~name.indexOf('firstName')) {
            const _id = name.substring('firstName'.length)
            const index = this.state.visitors.findIndex(idSelector(_id))
            const newVisitors = this.state.visitors.map(
                (visitor, i) => {
                    if (i===index) {
                        return {
                            _id: visitor._id,
                            firstName: value,
                            lastName: visitor.lastName
                        }
                    } else {
                        return visitor
                    }
                }
            )

            this.setState({visitors: newVisitors})
        }

        if (~name.indexOf('lastName')) {
            const _id = name.substring('lastName'.length)
            const index = this.state.visitors.findIndex(idSelector(_id))
            const newVisitors = this.state.visitors.map(
                (visitor, i) => {
                    if (i === index) {
                        return {
                            _id: visitor._id,
                            firstName: visitor.firstName,
                            lastName: value
                        }
                    } else {
                        return visitor
                    }
                }
            )

            this.setState({visitors: newVisitors})
        }

    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <fieldset>
                    <legend>Заполните форму бронирования</legend>
                    <p>
                        <label>
                            Дата посещения ресторана:
                            <input
                                name="eventDate"
                                type="text"
                                placeholder="дд.мм.гг"
                                value={this.state.eventDate}
                                onChange={this.simpleInputChange}
                                required
                            />
                        </label>
                    </p>

                    <p>
                        <label>
                            Время посещения ресторана:
                            <input
                                name="eventTime"
                                type="text"
                                placeholder="чч.мм"
                                value={this.state.eventTime}
                                onChange={this.simpleInputChange}
                                required
                            />
                        </label>
                    </p>

                    <p>
                        <label>
                            Количество гостей:
                            <input
                                name="quantity"
                                type="text"
                                value={this.state.quantity}
                                onChange={this.quantityInputChange}
                                required
                            />
                        </label>
                    </p>


                    {
                        this.state.visitors.map(
                            (client, index) =>
                                <div key={client._id} className={'visitor' + index}>
                                    <fieldset>
                                        <legend>Информация о госте</legend>
                                        <p>
                                            <label>
                                                Имя:
                                                <input
                                                    name={'firstName' + client._id}
                                                    type="text"
                                                    value={this.state.visitors[index].firstName}
                                                    onChange={this.visitorInputChange}
                                                    required
                                                />
                                            </label>
                                        </p>


                                        <p>
                                            <label>
                                                Фамилия:
                                                <input
                                                    name={'lastName' + client._id}
                                                    type="text"
                                                    value={this.state.visitors[index].lastName}
                                                    onChange={this.visitorInputChange}
                                                    required
                                                />
                                            </label>
                                        </p>
                                    </fieldset>
                                </div>
                        )
                    }


                    <p>
                        <label>
                            Контактный телефон:
                            <input
                                name="phone"
                                type="text"
                                placeholder="8 xxx xxx xx xx"
                                value={this.state.phone}
                                onChange={this.simpleInputChange}
                                required
                            />
                        </label>
                    </p>

                    <p>
                        <label>
                            e-mail:
                            <input
                                name="email"
                                type="email"
                                placeholder="user@server"
                                value={this.state.email}
                                onChange={this.simpleInputChange}
                                required
                            />
                        </label>
                    </p>

                    <button>Отправить заявку</button>
                </fieldset>
            </form >
        )
    }

static propTypes = {
        addReserve: PropTypes.func
}

static defaultProps ={
        addReserve: f => f
}
}


export default ReserveForm