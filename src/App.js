import { useState } from "react"
import Header from './components/Header'
import Greet from './components/Greet'
import Tasks from './components/Tasks'


function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "pick the baby from daycare",
      day: " 14th february",
      reminder: true,
    },
    {
      id: 2,
      description: "coding",
      day: " 14th february",
      reminder: true,
    },

    {
      id: 3,
      description: "gym",
      day: " 14th february",
      reminder: true,
    },
  ]
  )

  //Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)))
  }

  return (

    <div className="container">
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} onDelete={deleteTask} />


    </div>
  );
}

export default App;


