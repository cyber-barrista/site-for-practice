import {Router} from 'express'
import {v4} from 'uuid'

const userDish = Router()

//Выдача посетителю собраной webpack'ом страницы информации о меню ресторана
userDish.get('/',
    (req, res) => {
        res.status(200)
        res.json(req.store.getState().dishes)
        res.sendFile('/siteForPractice/src/server/public/siteForPractice/src/server/public/user-dish.html')
    }
)

export default userDish