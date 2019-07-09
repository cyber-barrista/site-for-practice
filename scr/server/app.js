import express from 'express'
import bodyParser from 'body-parser'
import storeFactory from '../redux-storage/store-factory'
import userInfo from './user-router/info'
import userReserve from './user-router/reserve'
import userDish from './user-router/dish'
import adminInfo from './admin-router/info'
import adminReserve from './admin-router/reserve'
import adminDish from './admin-router/dish'


const serverStore = storeFactory(true,'./scr/server/static/serverState.json')

const addStoreToRequestPipeline = (req, res, next) => {
    req.store = serverStore
    next()
}

const what = (req,res, next) => {
    console.log(res)
}

const logger = (req, res, next) => {
    console.log(req.method + ' request for' + req.url)
    next()
}

const sayHallo = (req, res) => {
    res.status(200)
    res.send('<h1>Hello!</h1>')
}

const app = express()

app.use(logger)
app.use(bodyParser.json())
//app.use(sayHallo)
app.use(addStoreToRequestPipeline)
app.use('/info', userInfo)
app.use('/reserve', userReserve)
app.use('/dish', userDish)
app.use('/admin/info', adminInfo)
app.use('/admin/reserve', adminReserve)
app.use('/admin/dish', adminDish)
//app.use('/test',router)
//app.use(what)

export default app