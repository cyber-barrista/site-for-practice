import React from 'react'
import Dish from './dish'

const Dishes = (props) => {
    const {dishes} = props

    return (
        <div className="dishes">
            {
                dishes.map(
                    (dish) => {
                        return (
                            <Dish key={dish._id} dish={dish}/>
                        )
                    }
                )
            }
        </div>
    )
}

export default Dishes