import React from 'react'
import app from './app'

global.React = React


//Разворачиваем локальный сервер, определённый в app
app.set('port', process.env.PORT || 5000)

app.listen(
    app.get('port'),
    () => console.log('Server has unfolded. Port: 5000')
)