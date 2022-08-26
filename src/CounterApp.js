import React from 'react'
import { useCounter } from './hooks/useCounter';

const CounterApp = () => {
    const [counter, increment, reset] = useCounter();


  return (
    <div>
        <h1>Clicks: {counter}</h1>
        <button onClick={increment}>
            Incrementar
        </button>

        <button onClick={reset}>
            Resetear
        </button>
    </div>
  )
}

export {CounterApp};