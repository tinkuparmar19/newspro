import React from 'react'
import {useSelector} from 'react-redux'
import NewsCard from './NewsCard'

function BookMarkList() {
    const bookmark = useSelector(state => state.bookmark)
    return (
        <div style={{margin: '50px 200px'}}>
            {bookmark && bookmark.map(content => {
                return <NewsCard content={content} key={content.title}/>
            })} 
        </div>
    )
}

export default BookMarkList
