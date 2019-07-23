import {Router} from 'express'
import path from 'path'
import passport from './authentication/JwtPassport'

const adminInfo = Router()

//Выдача админу информации о ресторане
adminInfo.get('/', passport.authenticate('jwt', {session: false}),
    (req, res) => {
        res.status(200)
        res.sendFile(path.join(__dirname, '/..', '/..', 'public/admin-info.html'))
    }
)


export  default adminInfo
