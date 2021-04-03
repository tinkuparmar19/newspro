import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {DebounceInput} from 'react-debounce-input'

import { Layout } from 'antd';
import NewsCard from './NewsCard';
import './Home.css'
import { useSelector, useDispatch } from 'react-redux';
import {addNews} from '../actions'

const { Content } = Layout;

function Home() {
    const news = useSelector(state => state.news)
    const filter = useSelector(state => state.filter)

    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')

    useEffect(() => {
        function apiFetch() {
            fetch(`https://newsapi.org/v2/everything?q=everything&from=2021-03-20&to=2021-03-31&sortBy=popularity&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                if(result.articles !== undefined) {
                    console.log(result)
                    dispatch(addNews(result.articles))
                }
            })
        }
        apiFetch()
    }, [page])

    let searchData

    if(query.trim().length > 2 && news.length > 0) {
        searchData = (news.filter(item => {
            return item.title.toLowerCase().includes(query.trim().toLowerCase()) || item.author.toLowerCase().includes(query.trim().toLowerCase())
    }))
    } else {
        searchData = filter.length > 0 ? filter : news
    }


    return (
        <div className='home'>
            <DebounceInput
              minLength={1}
              debounceTimeout={2000} 
              className='searchbox'
              type='text' 
              placeholder='search by author name or title'
              value={query} 
              onChange={(e) => setQuery(e.target.value) }
            />

            <Content style={{overflow: 'initial'}}>
                <div className="site-layout-background">
                    <InfiniteScroll
                        dataLength={searchData.length}
                        next={() => setPage(page => page+1)}
                        hasMore={true}
                    >
                        {searchData && searchData.map(content => {
                            return <NewsCard content={content} key={content.title}/>
                        })} 
                    </InfiniteScroll> 
                </div>
            </Content>
        </div>
    )
}

export default Home