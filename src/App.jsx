import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import './App.css'

function App() {
  return (
    <>
    
      <h1 className=" text-3xl font-semibold">Todo List App</h1>
      <TodoForm/>
      <TodoList/>
    </>
  )
}

export default App
