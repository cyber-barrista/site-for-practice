import React from 'react'
import PropTypes from 'prop-types'
import Recipe from './recipe'

const FullDish = (props) => {
    const {dish, onEdit, onSmall} = props


    return (
        <section>
            <h1>{dish.name}</h1>
            <img src={(dish.urlOfImage) ? dish.urlOfImage : "img/one.jpg"} alt="image"/>
            <h2>Описание блюда</h2>
            <p>{dish.fullDescription}</p>
            <Recipe recipes={dish.recipes}/>
            <p>
                <button onClick={onEdit}>Редактировать</button>
                <button onClick={onSmall}>Назад</button>
            </p>
        </section>
    )
}




export default FullDish
