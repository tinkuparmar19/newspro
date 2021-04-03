import React, { useEffect } from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {filterNews, showNews} from '../actions'

import { Layout, Menu } from 'antd';

const { Sider } = Layout;


let nav = [] 
let count = 1
function Nav() {
    const news = useSelector(state => state.news)
    const dispatch = useDispatch()

    useEffect(() => {
        news.map(content => {
            if(nav.indexOf(content.source.name) === -1) {
                nav.push(content.source.name)
            }
            return nav
        })
    }, [news])

    const handleClick = (item) => {
        dispatch(filterNews([news, item]))
    }

    const showAll = () => {
        dispatch(showNews(news))
    }

    return (
        <div>
        <Sider
            className='site-layout-background'
            theme='light'
            id='nav'
            style={{
                overflow: 'auto',
                position: 'fixed',
                width: '20%',
                height: '100vh',
                left: 0,
            }}
        >
        <h2 style={{textAlign: 'center', paddingTop: '60px'}}>Sources</h2>
        <Menu mode="inline" defaultSelectedKeys={['1']} >
            <Menu.Item key="1" onClick={() => showAll()}>All</Menu.Item>
            {nav && nav.map(item => {
                return <Menu.Item key={count++} onClick={() => handleClick(item)}>{item}</Menu.Item>
            })}
        </Menu>
        </Sider>
        </div>
    )
}

export default Nav
