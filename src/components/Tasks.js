const tasks = [
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

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.description}</h3>)
            )}
        </>
    )
}

export default Tasks
