import React from 'react'

const ThreeLineButton = (props) => {
    const {text, onClickers} = props

    return (
        <p>
            <button onClick={onClickers[0]}>{text[0]}</button>
            <button onClick={onClickers[1]}>{text[1]}</button>
            <button onClick={onClickers[2]}>{text[2]}</button>
        </p>
    )
}

export default ThreeLineButton