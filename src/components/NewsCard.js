import React from 'react'
import { Row, Col, Card, Button } from 'antd';
import {HeartOutlined} from '@ant-design/icons'
import {useDispatch, useSelector} from 'react-redux'
import {addBookMark, removeBookMark} from '../actions'

function NewsCard(props) {
    const {content} = props
    const bookmark = useSelector(state => state.bookmark)
    const dispatch = useDispatch()

    let flag = bookmark.filter(item => item.publishedAt === content.publishedAt)

    const handleClick = () => {
        if(flag.length > 0) {
            dispatch(removeBookMark(content))
        }
        if(flag.length === 0){
            dispatch(addBookMark(content))
        }
    }

    return (
        <Card style={{margin: '5px 0'}}>
            <Row>
            <Col span={6} align='center'>
                <img src={content.urlToImage} alt='' style={{width: 100, height: 100, borderRadius: '50%'}}/>
                <Button type="link" size='large' href={content.url} target='_blank'>view full article</Button><br />
                <HeartOutlined 
                    style={{fontSize: '20px', cursor: 'pointer', color: flag.length > 0 ? 'rgb(180, 224, 241)' : 'black'}} 
                    onClick={() => handleClick()}
                />
            </Col>
            <Col span={18}>
                <span style={{fontSize: 20, fontWeight: 600}}>{content.title}</span><br />
                <span>- {content.source.name}</span><br/><br/>
                <span>{content.description}</span>
            </Col>
            </Row>
        </Card>
    )
}

export default NewsCard
