import {Router} from 'express'
import constants from '../../../redux-storage/constants'
import passport from '../../admin-authentication/JwtPassport'

const dispatchAndRespond = (req, res, action) => {
    res.status(200)
    res.json(action)
}

const adminReserve = Router()

//Выдача админу собраной webpack'ом страницы резервов посетителей
adminReserve.get('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        res.status(200)
        res.sendFile('/siteForPractice/src/server/public/admin-reserve.html')
    }
)

//Обработка редактирования (админом) состояния резерва посетителя
adminReserve.put('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        dispatchAndRespond(req, res, {
            type: constants.RATE_RESERV,
            id: req.body.id,
            status: req.body.status,
        })
    }
)

export default adminReserve
