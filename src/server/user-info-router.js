import {Router} from 'express'
import path from 'path'

const userInfo = Router()


//Выдача посетителю собраной webpack'ом страницы информации о ресторане
userInfo.get('/',
    (req, res) => {
        res.status(200)
        res.sendFile(path.join(__dirname, '/..', '/..', 'public/user-info.html'))
    }
)

export  default userInfo