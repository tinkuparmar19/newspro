import React, { useContext, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { userContext } from './App'
import {DebounceInput} from 'react-debounce-input'

function Home() {
    const {state, dispatch} = useContext(userContext)
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=everything&from=2021-03-20&to=2021-03-31&sortBy=popularity&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
            if(result.articles !== undefined) {
                dispatch({ type: 'ADD_DATA', payload: result.articles})
            }
        })
    }, [page])
    console.log(state)

    let searchData 
    if(query.trim().length > 2 && state.length > 0) {
        searchData = (state.filter(item => {
            return item.title.toLowerCase().includes(query.trim().toLowerCase()) || item.author.toLowerCase().includes(query.trim().toLowerCase())
    }))
    } else {
        searchData = state
    }

    return (
        <div>
            <DebounceInput
              minLength={1}
              debounceTimeout={2000} 
              className='form-control searchbox' 
              type='text' 
              placeholder='search by author name or title'
              value={query} 
              onChange={(e) => setQuery(e.target.value) }
            />

            <InfiniteScroll
                dataLength={searchData.length}
                next={() => setPage(page => page+1)}
                hasMore={true}
            >
                {searchData && searchData.map(content => {
                    return <p>{content.title}</p>
                })}
            </InfiniteScroll>
        </div>
    )
}

export default Home