import React from 'react'

const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" />
            </div>
            <div className="form-control">
                <label>Date & time</label>
                <input type="text" placeholder="Add Date & time" />
            </div>
            <div className="form-control form-control-check" >
                <label>Set Reminder</label>
                <input type="checkbox" placeholder="Add Reminder" />
            </div>

            <input type="submit" Value="Save Task" className="btn btn-block" />


        </form>
    )
}

export default AddTask
