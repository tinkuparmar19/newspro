import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from '../Reducer';

import Home from './Home'
import Nav from './Nav';

export const userContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <userContext.Provider value={{state, dispatch}}>
          <Nav />
          <Home />
      </userContext.Provider>
    </div>
  );
}

export default App;
