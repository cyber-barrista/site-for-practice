import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import storeFactory from '../redux-storage/store-factory'
import userInfo from './user-info-router'
import userReserve from './user-reserve-router'
import userDish from './user-dish-router'
import adminInfo from './admin-info-router'
import adminReserve from './admin-reserve-router'
import adminDish from './admin-dish-router'
import admin from './authentication/router'
import passport from './authentication/JwtPassport'
import getState from '../database/geter'
import Reserve from '../database/reserves'
import Dish from '../database/dishes'
//Импорт роутеров, вынесеных в собственные директории

//Создаём серверное хранилище и добовляем его к объекту ответа
const storageAdder = (req, res, next) => {
    getState(Reserve, Dish).then(
        initialState => {
            const store = storeFactory(true, initialState)
            res.store = store
            //console.log(res.store.getState())
            next()
        }
    )
}


//Отслеживаем маршруты
const logger = (req, res, next) => {
    console.log(req.method + ' request for' + req.url)
    next()
}

//собираем обработчики
const app = express()

app.use(logger)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(storageAdder)
app.use(passport.initialize())
app.use(express.static(path.join(__dirname, '/..', '/..', '/public')))
app.use('/admin', admin)
app.use('/info', userInfo)
app.use('/reserve', userReserve)
app.use('/dish', userDish)
app.use('/admin/info', adminInfo)
app.use('/admin/reserve', adminReserve)
app.use('/admin/dish', adminDish)

export default app