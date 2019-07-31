import {Router} from 'express'
import path from 'path'
import {v4} from 'uuid'
import constants from '../redux-storage/constants'
import passport from './authentication/JwtPassport'

const dispatchAndRespond = (req, res, action) => {
    console.log(action)
    req.store.dispatch(action)
    res.status(200)
    res.json(action)
}

const adminDish = Router()

//Выдача админу сменю
adminDish.get('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        res.status(200)
        res.sendFile(path.join(__dirname, '/..', '/..', 'public/admin-dish.html'))
    }
)
//Обработка добавления нового блюда
adminDish.post('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        dispatchAndRespond(req, res, {
            type: constants.ADD_DISH,
            _id: v4(),
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
            _id: req.body._id,
            name: req.body.name,
            smallDescription: req.body.smallDescription,
            fullDescription: req.body.fullDescription,
            recipes: req.body.recipes,
            urlOfImage: req.body.urlOfImage,
        })
    }
)

export default adminDish
