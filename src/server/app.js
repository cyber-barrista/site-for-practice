import express from 'express'
import bodyParser from 'body-parser'
import storeFactory from '../redux-storage/store-factory'
import {writeJSON} from '../redux-storage/local-state-writer'
import userInfo from './user-router-and-pages/info-router-and-page/info-router'
import userReserve from './user-router-and-pages/reserve-router-and-page/reserve-router'
import userDish from './user-router-and-pages/dish-router-and-page/dish-router'
import adminInfo from './admin-router-and-pages/info-router-and-page/info-router'
import adminReserve from './admin-router-and-pages/reserve-router-and-page/reserve-router'
import adminDish from './admin-router-and-pages/dish-router-and-page/dish-router'
import admin from './admin-authentication/router'
import passport from './admin-authentication/JwtPassport'
//Импорт роутеров, вынесеных в собственные директории

//Создаём серверное хранилище и добовляем его к объекту ответа
const serverStore = storeFactory(true, './src/server/static/serverState.json')

const addStoreToRequestPipeline = (req, res, next) => {
    res.store = serverStore
    next()
}

//подписываем на хранилище сохранитель в локальный файл
serverStore.subscribe(
    () => {
        writeJSON('./src/server/static/serverState.json', serverStore.getState())
    }
)

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
app.use(passport.initialize())
app.use(addStoreToRequestPipeline)
app.use(express.static("/siteForPractice/src/server/public"))
app.use('/admin', admin)
app.use('/info', userInfo)
app.use('/reserve', userReserve)
app.use('/dish', userDish)
app.use('/admin/info', adminInfo)
app.use('/admin/reserve', adminReserve)
app.use('/admin/dish', adminDish)

export default app