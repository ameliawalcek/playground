import React from 'react'

export const Button = ({ button, handleOperation }) => {

    return (
        <div onClick={() => handleOperation(button)}>{button}</div>
    )
}
