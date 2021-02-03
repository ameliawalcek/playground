import React, { useReducer, useState, useEffect } from 'react'
import { BUTTONS, EQUAL, INITIAL_STATE, INITIATE, OPERATION, CLEAR, DECIMAL } from '../../constants/constants'
import { Button } from '../Button/Button'
import reducer from '../../reducers/reducer'

export const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    const [input, setInput] = useState([])
    const [operation, setOperation] = useState('')
    const [display, setDisplay] = useState([])
    const [button, setButton] = useState()

    const lastItem = [...display].pop()

    const formatInput = () => Number(input.join(''))

    const reset = () => {
        setOperation('')
        setInput([])
        setButton()
        setDisplay('')
    }

    const checkType = (item, type) => typeof item === type

    useEffect(() => {
        if (operation && checkType(lastItem, 'number') && operation !== EQUAL) {
            setDisplay([...display, operation])
        }

        if (operation === EQUAL) {
            setDisplay([state.total])
        }
    }, [operation, button])

    useEffect(() => {
        if (input.length) {
            if ((checkType(lastItem, 'string') || !display.length)) {
                setDisplay([...display, formatInput()])
            }

            if (checkType(lastItem, 'number')) {
                let newDisplay = [...display]
                newDisplay.pop()
                setDisplay([...newDisplay, formatInput()])
            }
        }
    }, [input])

    const handleOperation = (button) => {
        setButton(button)
        if (button === CLEAR) {
            dispatch({ type: CLEAR })
            reset()
            return
        }

        if (button === DECIMAL) {
            input.length
                ? setInput(preInput => [...preInput, button])
                : setInput([0, button])
            return
        }

        if (checkType(button, 'number')) {
            setInput(preInput => [...preInput, button])
            return
        }

        if (checkType(button, 'string') && checkType(lastItem, 'number') && input.length) {
            if (!operation && !state.initialInput) {
                dispatch({ type: INITIATE, payload: formatInput() })
                setOperation(button)
                setInput([])
            }

            if (operation) {
                dispatch({
                    type: OPERATION,
                    payload: {
                        operation,
                        input: formatInput(),
                        value: !state.initialize
                            ? state.initialInput
                            : state.total
                    }
                })
                setInput([])
                setOperation(button)
            }

            if (state.total && button === EQUAL) {
                setOperation(button)
                dispatch({ type: OPERATION, payload: { operation: button } })
                reset()
            }
        }
    }

    return (
        <div className='calc'>
            <div className='result'>
                {state.equal
                    ? state.total
                    : (display.length ? display.map(d => <span key={Math.random()}>{d}</span>) : 0)
                }
            </div>
            <ul className='numbers'>
                {BUTTONS.map(button => {
                    return <Button button={button} handleOperation={handleOperation} key={button} />
                })}

            </ul>
        </div>
    )
}
