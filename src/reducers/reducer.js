import { ADD, CLEAR, DIVIDE, EQUAL, MULTIPLY, OPERATION, SUBTRACT } from "../constants/constants"

function reducer(state, action) {
    const { total } = state

    switch (action.type) {
        case CLEAR: {
            return {
                ...state,
                total: 0
            }
        }
        case OPERATION: {
            let newState
            console.log(action.payload)
            switch (action.payload.operation) {
                
                case ADD: {
                    console.log('hello')
                    newState = {
                        ...state,
                        total: total + action.payload.input
                    }
                    break
                }
                case SUBTRACT: {
                    newState = {
                        ...state,
                        total: total - action.payload.input
                    }
                    break
                }
                case MULTIPLY: {
                    newState = {
                        ...state,
                        total: total * action.payload.input
                    }
                    break
                }
                case DIVIDE: {
                    newState = {
                        ...state,
                        total: total / action.payload.input
                    }
                    break
                }
                case EQUAL: {
                    newState = {
                        ...state,
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