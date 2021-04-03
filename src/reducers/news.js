
const newsReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_DATA':
            return state.concat(action.payload.map(item => item))
        
        default:
            return state    
    }
}

export default newsReducer