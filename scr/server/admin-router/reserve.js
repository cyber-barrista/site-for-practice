import {Router} from 'express'
import {v4} from 'uuid'

const adminReserve = Router()

adminReserve.get('/',
    (req, res) => {
        res.status(200)
        res.send('<h1>Reserve for admins</h1>')
    }
)

adminReserve.post('/',
    (req, res) => {

    }
)

export default adminReserve
