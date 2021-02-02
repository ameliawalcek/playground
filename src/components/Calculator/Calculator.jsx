import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { BUTTONS, INITIAL_STATE, OPERATION } from '../../constants/constants'
import { Button } from '../Button/Button'
import reducer from '../../reducers/reducer'

export const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const [inputFirst, setInputFirst] = useState([0])
    const [inputSecond, setSecond] = useState([0])
    const [operation, setOperation] = useState('')

    console.log(state.total)

    const handleOperation = (button) => {
        if (typeof button === 'number' && !operation) {
            setInputFirst(preInput => [...preInput, button])
        }else{
            setSecond(preInput => [...preInput, button])
        }

        if (typeof button === 'string' && !operation) {
            setOperation(button)
        }

        dispatch({
            type: OPERATION,
            payload: {
                operation,
                input: [Number(inputFirst.join('')), Number(inputSecond.join(''))]
            }
        })
    }

    return (
        <div>
            <div>
                {state.equal 
            ? state.total 
            : Number(input.join(''))
            }
            </div>
            <div>{operation ? <div>{operation}</div>
            {BUTTONS.map(button => {
                return <Button button={button} handleOperation={handleOperation} key={button} />
            })}
        </div>
    )
}
