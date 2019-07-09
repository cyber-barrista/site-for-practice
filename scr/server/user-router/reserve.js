import {Router} from 'express'
import {v4} from 'uuid'

const userReserve = Router()

userReserve.get('/',
    (req, res) => {
        res.status(200)
        res.send('<h1>Reserve for users </h1>')
    }
)

userReserve.post('/',
    (req, res) => {

    }
)

export default userReserve

