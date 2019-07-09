import {Router} from 'express'

const adminInfo = Router()

adminInfo.get('/',
    (req, res) => {
        res.status(200)
        res.send('<h1>Info for admins</h1>')
    }
)

export  default adminInfo
