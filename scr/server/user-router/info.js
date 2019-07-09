import {Router} from 'express'

const userInfo = Router()

userInfo.get('/',
    (req, res) => {
        res.status(200)
        res.send('<h1>Info for Users</h1>')
    }
)

export  default userInfo