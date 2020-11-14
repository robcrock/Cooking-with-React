import React, { useState } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('pink');

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0}/>
      Counter Hooks
      <CounterHooks initialCount={0}/>
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'pink' ? 'blue' : 'pink';
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
