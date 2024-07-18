import { useEffect, useState } from 'react'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos'

function App() {
  const [todos,setTodos]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
      .then(async (response) => {
        const json = await response.json();
        setTodos(json.todos);
      })
  },[todos])

  const addTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };
  

  return (
    <div>
        <CreateTodo addTodo={addTodo} />
        <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
