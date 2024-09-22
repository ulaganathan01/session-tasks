import { useState } from "react"

export default function AddTodo({setTodo}){
    const [newTask, setNewTask] = useState({taskName: "", description: "", status: false});
    function handleTask(e){
        setNewTask({...newTask, [e.target.name]: e.target.value});
    }
    function addTask(){
        setTodo((prev) => {
            return [...prev, newTask];
        })
        setNewTask({taskName: "", description: "", status: false})
    }
    return(
        <>
        <h1 className="text-center mb-5 mt-3">My Todo</h1>
        <div class="row d-flex justify-content-center mb-5">
            <div class="col-3">
                <input type="text" name="taskName" value={newTask.taskName} onChange={handleTask} class="form-control" placeholder="Task name" aria-label="Task name"/>
            </div>
            <div class="col-3">
                <input type="text" name="description" value={newTask.description} onChange={handleTask} class="form-control" placeholder="Task description" aria-label="Task description"/>
            </div>
            <div className="col-3">
                <button type="button" onClick={addTask} className="btn btn-success px-4">Add</button>
            </div>
        </div>
        </>
    )
}