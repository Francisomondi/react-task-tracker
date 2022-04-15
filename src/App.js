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

  return (

    <div className="container">
      <Header title='Hello Francis' />
      <Tasks tasks={tasks} />


    </div>
  );
}

export default App;


