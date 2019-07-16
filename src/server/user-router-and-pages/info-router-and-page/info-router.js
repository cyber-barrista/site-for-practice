import {Router} from 'express'

const userInfo = Router()


//Выдача посетителю собраной webpack'ом страницы информации о ресторане
userInfo.get('/',
    (req, res) => {
        res.status(200)
        res.sendFile('/siteForPractice/src/server/public/user-info.html')
    }
)

export  default userInfo