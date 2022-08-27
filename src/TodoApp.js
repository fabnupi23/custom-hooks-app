import React from 'react'
import { useTodos } from './hooks/useTodos';

const initialTodos = [
    {id: 1, title: 'Aprender React' },
    {id: 2, title: 'Aprender Node.js' },
]

const TodoApp = () => {
    const [todos, addTodo, deleteTodo] = useTodos(initialTodos);
   
  return (
    <div>
        <ul>
            {todos.map(todo =>(
                <li key={todo.id}>
                {todo.title}
                <br/>
                <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
            </li>

            ))}            
        </ul>
        <button onClick={() => addTodo({title: 'Nueva tarea' })}>Nueva tarea</button>
    </div>
  )
}

export { TodoApp };