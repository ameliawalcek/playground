import { ADD, CLEAR, DIVIDE, EQUAL, MULTIPLY, OPERATION, SUBTRACT, INITIATE } from "../constants/constants"

function reducer(state, action) {
    console.log(action.payload)
    switch (action.type) {
        case INITIATE: {
            return {
                ...state,
                initialInput: action.payload,
                total: action.payload,
                equal: false
            }
        }
        case CLEAR: {
            return {
                ...state,
                initialize: false,
                initialInput: 0,
                total: 0,
                equal: false
            }
        }
        case OPERATION: {
            const { value, input, operation } = action.payload
            let newState

            switch (operation) {
                case ADD: {
                    newState = {
                        ...state,
                        initialize: true,
                        total: value + input
                    }
                    break
                }
                case SUBTRACT: {
                    newState = {
                        ...state,
                        initialize: true,
                        total: value - input
                    }
                    break
                }
                case MULTIPLY: {
                    newState = {
                        ...state,
                        initialize: true,
                        total: value * input
                    }
                    break
                }
                case DIVIDE: {
                    newState = {
                        ...state,
                        initialize: true,
                        total: value / input
                    }
                    break
                }
                case EQUAL: {
                    newState = {
                        ...state,
                        initialInput: 0,
                        initialize: false,
                        equal: true
                    }
                    break
                }
                default:
                    throw new Error("Not a valid operation")
            }
            return { ...newState }
        }
        default:
            throw new Error("Unknown action please try again")
    }
}

export default reducer