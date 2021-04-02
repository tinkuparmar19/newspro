import React, { useContext, useEffect } from 'react'
import { userContext } from './App'

import { Layout, Menu } from 'antd';

const { Sider } = Layout;


let nav = [] 
let count = 1
function Nav() {
    const { state, dispatch } = useContext(userContext)
    
    useEffect(() => {
        state.news.map(content => {
            if(nav.indexOf(content.source.name) === -1) {
                nav.push(content.source.name)
            }
        })
    }, [state])

    const handleClick = (item) => {
        dispatch({ type: 'ADD_FILTER', payload: item })
    }

    const showAll = () => {
        dispatch({ type: 'ALL', payload: '' })
    }

    return (
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
        <h2 style={{textAlign: 'center', paddingTop: '30px'}}>Sources</h2>
        <Menu mode="inline" defaultSelectedKeys={['1']} >
            <Menu.Item key="1" onClick={() => showAll()}>All</Menu.Item>
            {nav && nav.map(item => {
                return <Menu.Item key={count++} onClick={() => handleClick(item)}>{item}</Menu.Item>
            })}
        </Menu>
        </Sider>
    )
}

export default Nav
