import React from 'react'
import PropTypes from 'prop-types'

const SmallDish = (props) => {
    const {dish, onFull} = props

    return (
        <section>
            <h1>{dish.name}</h1>
            <figure>
                <p><img src={(dish.urlOfImage) ? dish.urlOfImage : "img/one.jpg"} alt="image"/></p>
                <p>{dish.smallDescription}</p>
            </figure>
            <p>
                <button onClick={onFull} >Просмотреть</button>
            </p>
        </section>
    )
}


export default SmallDish