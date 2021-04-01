import React, { useContext, useEffect, useState } from 'react'
import { userContext } from './App'

let nav = [] 
function Nav() {
    const { state, dispatch } = useContext(userContext)
    
    useEffect(() => {
        state && state.map(content => {
            if(nav.indexOf(content.source.name) === -1) {
                nav.push(content.source.name)
            }
        })
    }, [state])

    const handleClick = (item) => {
        dispatch({ type: 'ADD_FILTER', payload: item })
        console.log(item, 'clicked')
    }

    const showAll = () => {
        dispatch({ type: 'ADD_FILTER', payload: '' })
    }

    return (
        <div style={{marginRight: '20px'}}>
            <div>
                <button onClick={() => showAll()}>All</button>
                {nav && nav.map(item => {
                    return <button onClick={() => handleClick(item)}>{item}</button>
                })}
            </div>
        </div>
    )
}

export default Nav
