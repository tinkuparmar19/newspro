export const initialState = []
let tempState = []

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_DATA': {
            tempState = state
            return state.concat(action.payload.map(item => item))
        }
        
        case 'ADD_FILTER': {
            state = tempState
            if(action.payload === '') {
                return tempState
            } else {
                return state.filter(item => item.source.name === action.payload)
            }
        }

        default:
            return state    
    }
}