
const bookmark = (state=[], action) => {
    switch(action.type) {
        case 'ADD_BOOKMARK':
            return state.concat(action.payload)

        case 'REMOVE_BOOKMARK':
            return state.filter(item => item !== action.payload)

        default:
            return state    
    }
}

export default bookmark