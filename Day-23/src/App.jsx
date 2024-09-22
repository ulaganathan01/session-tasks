import { useState } from 'react';
import './App.css';
import AddTodo from './pages/AddTodo';
import ToDo from './pages/ToDo';
import StatusFilter from './pages/StatusFilter';


function App() {

  const [TodoList, setTodoList] = useState([
    {
      taskName: "Healthy Habit",
      description: "For a healthy lifestyle, wake up early in the morning",
      status: false
    },
    {
      taskName: "Healthy Habit",
      description: "Brush you teeth",
      status: false
    },
    {
      taskName: "Healthy Habit",
      description: "Had a healthy breakfast",
      status: false
    }
  ])
  return(
    <div>
      <AddTodo setTodo={setTodoList}/>
      <StatusFilter setTodo={setTodoList}/>
      <div className="card-container d-flex justify-content-around flex-wrap">
        {
          TodoList.map((task, index) => <ToDo task={task} id={index} setTodo={setTodoList} key={index}/>)
        }
      </div>
    </div>
  )
}
export default App
