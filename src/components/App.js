import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from '../Reducer';

import { Layout } from 'antd';

import Home from './Home'
import Nav from './Nav';

export const userContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <userContext.Provider value={{state, dispatch}}>
          <Layout>
            <Nav />
            <Home />
          </Layout>
      </userContext.Provider>
    </div>
  );
}

export default App;
