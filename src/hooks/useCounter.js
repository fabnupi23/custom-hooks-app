import { useState } from 'react'

const useCounter = () => {
    const [counter, setCounter] = useState(0); //Creamos el estado y lo vamos a inicializar en 0

    const increment = () =>{//creamos la función increment y sera un arrowFunction
        setCounter(counter+1);//va a hacer el incremento del contador
    }

    const reset = () => {//Creamos la función de Reset, también sera una arrowFunction
        setCounter(0); //Se inicializa en cero 
    }

  return [
    counter,
    increment,
    reset
  ]
}

export { useCounter };