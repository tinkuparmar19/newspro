export const  addNews = (payload) => {
    return {
        type: 'ADD_DATA',
        payload
    }
} 

export const showNews = (payload) => {
    return {
        type: 'ALL',
        payload
    }
}

export const filterNews = (payload) => {
    return {
        type: 'ADD_FILTER',
        payload
    }
}

export const addBookMark = (payload) => {
    return {
        type: 'ADD_BOOKMARK',
        payload
    }
}

export const removeBookMark = (payload) => {
    return {
        type: 'REMOVE_BOOKMARK',
        payload
    }
}
