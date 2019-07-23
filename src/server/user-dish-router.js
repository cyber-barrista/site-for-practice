import {Router} from 'express'
import path from 'path'
import {v4} from 'uuid'

const userDish = Router()

//Выдача посетителю собраной webpack'ом страницы информации о меню ресторана
userDish.get('/',
    (req, res) => {
        res.status(200)
        res.sendFile(path.join(__dirname, '/..', '/..', 'public/user-dish.html'))
    }
)

export default userDish