import {Router} from 'express'
import {v4} from 'uuid'

const adminDish = Router()

adminDish.get('/',
    (req, res) => {
        res.status(200)
        res.send('<h1>Dishes for admins</h1>')
    }
)

adminDish.post('/',
    (req, res) => {

    }
)

adminDish.put('/',
    (req, res) => {

    }
)

export default adminDish
