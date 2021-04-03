
const newsFilterReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_FILTER': 
            return action.payload[0].filter(item => item.source.name === action.payload[1])

        case 'ALL': 
            return action.payload

        default:
            return state    
    }
}

export default newsFilterReducer