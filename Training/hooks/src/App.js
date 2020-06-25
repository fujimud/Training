import React, { useState } from 'react';

function App() {
  //const [count, setCount] = useState(4)
  //const [state, setState] = useState({count:4, theme: 'blue'})  // object
  //const count = state.count
  //const theme = state.theme
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')

  function decrementCount() {
    //setCount(count - 1)  this works but is the incorrect way to do this
    setCount(preCount => preCount - 1)
    //setState(prevState => {
    //  return {...prevState, count: prevState.count - 1}
    //})
  }

  function incrementCount() {
    setCount(preCount => preCount + 1)
    setTheme('red')
  }

  return ( 
    <>
      <button onClick={decrementCount}>-</button> 
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;