import React from 'react'
import { Row, Col, Card, Button } from 'antd';

function NewsCard(props) {
    const {content} = props
    return (
        <Card style={{margin: '5px 0'}}>
            <Row>
            <Col span={6} align='center'>
                <img src={content.urlToImage} alt='' style={{width: 100, height: 100, borderRadius: '50%'}}/>
                <Button type="link" size='large' href={content.url} target='_blank'>view full article</Button>
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
