import { useState } from "react"
import Header from './components/Header'
import Greet from './components/Greet'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "pick the baby from daycare",
      day: " 14th february",
      reminder: false,
    },
    {
      id: 2,
      text: "coding",
      day: " 14th february",
      reminder: true,
    },

    {
      id: 3,
      text: "gym",
      day: " 14th february",
      reminder: true,
    },
  ]
  )
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  //Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)))
  }

  //Toggle reminder

  const ToggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  return (

    <div className="container">
      <Header title='Task Tracker' />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask} onToggle={ToggleReminder}
      /> : ('no tasks to display')
      }


    </div>
  );
}

export default App;


