import React from 'react'

export const Button = ({ button, handleOperation }) => {

    return (
        <li onClick={() => handleOperation(button)}>{button}</li>
    )
}
