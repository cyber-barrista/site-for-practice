import {Router} from 'express'
import {v4} from 'uuid'

const userDish = Router()

userDish.get('/',
    (req, res) => {
        res.status(200)
        res.send('<h1>Dishes for users</h1>')
    }
)

export default userDish