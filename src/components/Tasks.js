import { useState } from "react";


const Tasks = () => {
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
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.description}</h3>)
            )}
        </>
    )
}

export default Tasks
