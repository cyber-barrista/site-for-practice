import {Router} from 'express'
import passport from '../../admin-authentication/JwtPassport'

const adminInfo = Router()

//Выдача админу информации о ресторане
adminInfo.get('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        res.status(200)
        res.sendFile('/siteForPractice/src/server/public/admin-info.html')
    }
)


export  default adminInfo
