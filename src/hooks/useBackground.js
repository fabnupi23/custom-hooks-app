import { useMemo } from 'react'
import { useMousePosition } from './useMousePosition';

const useBackground = () => {

    const position = useMousePosition();

    const background = useMemo(() => 
        position.x < window.innerWidth/2 ? 'orange' : 'lightblue'
    , [position]);

  return { background, position };
}

export { useBackground };   