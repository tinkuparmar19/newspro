export const initialState = {news: [], filter: []}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_DATA': return {
            news: state.news.concat(action.payload.map(item => item))
        }
        
        case 'ADD_FILTER': return {
            ...state,
            filter: state.news.filter(item => item.source.name === action.payload)
        }

        case 'ALL': return {
            ...state,
            filter: state.news.map(item => item)
        }

        default:
            return state    
    }
}