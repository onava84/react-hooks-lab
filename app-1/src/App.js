import List from './components/List'
import React, {useState} from 'react'
import AddTodo from './components/AddTodo'
import './App.css';

function App() {
  const [todos,setTodos] = useState([])
  
  function addTodo(item) {
    const newTodos = [...todos, item]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo}/>
      <List list={todos}/>
    </div>
  );
}

export default App;
