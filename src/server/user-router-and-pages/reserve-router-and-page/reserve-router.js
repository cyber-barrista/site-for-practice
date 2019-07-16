import {Router} from 'express'
import {v4} from 'uuid'
import constants from '../../../redux-storage/constants'


/*
Функция принимает действие, диспечирезует его на серверном хранилище и отправляет клиенту (для диспечирезации на его локальное хранилище)
 */
const dispatchAndRespond = (req, res, action) => {
    req.store.dispatch(action)
    res.status(200)
    res.json(action)
}

const userReserve = Router()

//Выдаём собранную webpack'ом статическую страницу
userReserve.get('/',
    (req, res) => {
        res.status(200)
        res.sendFile('/siteForPractice/src/server/public/user-reserve.html')
    }
)


//Обработка POST запроса посетителя (пополнение списка резервов столов)
userReserve.post('/',
    (req, res) => {
    dispatchAndRespond(req, res, {
        type: constants.ADD_RESERV,
        id: v4(),
        eventDate: req.body.eventDate,
        eventTime: req.body.eventTime,
        quantity: req.body.quantity,
        visitors: req.body.visitors,
        phone: req.body.phone,
        email: req.body.email,
    })
    }
)

export default userReserve

