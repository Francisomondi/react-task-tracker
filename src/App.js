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
      reminder: false,
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

  //Toggle reminder

  const ToggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  return (

    <div className="container">
      <Header title='Task Tracker' />
      {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask} onToggle={ToggleReminder}
      /> : ('no tasks to display')
      }


    </div>
  );
}

export default App;


