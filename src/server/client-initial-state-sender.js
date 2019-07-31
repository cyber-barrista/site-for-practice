import {Router} from 'express'

const initialStateSender = Router()

initialStateSender.get('/',
    (req, res) => {
        console.log('send')
        //console.log(req.store.getState())
        res.status(200)
        res.json(req.store.getState())
    }
)

export default initialStateSender
