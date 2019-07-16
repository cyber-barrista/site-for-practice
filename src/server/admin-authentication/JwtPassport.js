import passportJWT from 'passport-jwt'
import passport from 'passport'
import users from './users'

//Экстрактор, достоющий токен из req.app.locals
const tokenExtractor = (req) => {
    let token = null
    if (req.app.locals.token) {
        token = req.app.locals.token
    }
    return token
}

//Добовляем в опции наш экстрактор и рандомный ключ
export const jwtOption = {
    jwtFromRequest: tokenExtractor,
    secretOrKey: "deadCoreIsGreat"
}


//Стратегия проверяет совпадение id admin'а, звпакованного в токен в момент его создания (обработки POST запроса формы авторизации
var strategy = new passportJWT.Strategy(
    jwtOption,
    (payload, next) => {
        let userObject = users[users.findIndex(
            (element, index, array) => {
                if (element.id === payload.id) {
                    return true
                } else {
                    return null
                }
            }
        )]
        if (userObject) {
            next(null, userObject);
        } else {
            next(null, false);
        }
    }
)

passport.use(strategy)


export default passport