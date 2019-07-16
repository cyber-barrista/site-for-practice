import {Router} from 'express'
import {v4} from 'uuid'
import constants from '../../../redux-storage/constants'
import passport from '../../admin-authentication/JwtPassport'

const dispatchAndRespond = (req, res, action) => {
    res.status(200)
    res.json(action)
}

const adminDish = Router()

//Выдача админу сменю
adminDish.get('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        res.status(200)
        res.sendFile('/siteForPractice/src/server/public/admin-dish.html')
    }
)
//Обработка добавления нового блюда
adminDish.post('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        dispatchAndRespond(req, res, {
            type: constants.ADD_DISH,
            id: v4(),
            name: req.body.name,
            smallDescription: req.body.smallDescription,
            fullDescription: req.body.fullDescription,
            recipes: req.body.recipes,
            urlOfImage: req.body.urlOfImage,
        })
    }
)

//Обработка редактирования информации об уже имеющемся блюде
adminDish.put('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        dispatchAndRespond(req, res, {
            type: constants.RATE_DISH,
            name: req.body.name,
            smallDescription: req.body.smallDescription,
            fullDescription: req.body.fullDescription,
            recipes: req.body.recipes,
            urlOfImage: req.body.urlOfImage,
        })
    }
)

export default adminDish
