import {Router} from 'express'
import jwt from 'jsonwebtoken'
import {jwtOption} from './JwtPassport'
import users from './users'

const admin = Router()

//Выдача страницы авторизации
admin.get('/',
    (req, res) => {
        res.status(200)
        res.sendFile('/siteForPractice/src/server/public/admin.html')
    }
)

//Вручную обрабатываем форму ввода. По результату генерируем токен, записывая его в req.app.locals
admin.post('/',
    (req, res) => {
        console.log('making token')
        //if (req.body.user && req.body.password) {
        let frontUser = req.body.user
        let frontPassword = req.body.password
        // }

        let userObject = users[users.findIndex(
            (element, index, array) => {
                //console.log(element.user)
                //console.log(frontUser)
                if (element.user === frontUser) {
                    return true
                } else {
                    return null
                }
            }
        )]
        if (!userObject) {
            res.status(401)
            res.json({massage: "not user"})
        } else if (!(frontPassword === userObject.password)) {
            res.status(401)
            res.json({massage: "not password"})
        } else {
            const payload = {
                id: userObject.id
            }
            const token = jwt.sign(payload, jwtOption.secretOrKey)
            req.app.locals.token = token
        }
    }
)

export default admin