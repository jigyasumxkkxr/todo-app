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
  },[])

  const addTodo = (newTodo) => {
    console.log("Adding new todo to state:", newTodo);
    setTodos(prevTodos => [...prevTodos, newTodo]);
    console.log("Updated todos state:", [...todos, newTodo]);
  };
  

  return (
    <div>
        <CreateTodo addTodo={addTodo} />
        <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
