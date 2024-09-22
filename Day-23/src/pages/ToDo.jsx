

export default function ToDo({task, setTodo, id}){
    function handleStatus(e){
        console.log(e.target.value);
    }
    function removeTask(){
        setTodo((prev) => {
            const newList = prev.filter((item, index) => {
                if(index !== id){
                    return item;
                }
            })
            return newList;
        })
    }
    function editTask(){
        
    }
    return(
        <>
        <div className="card m-2" style={{width:"20rem"}}>
            <div className="card-body">
                <div className="task-name">
                    <span className="fw-bold">Name: </span>
                    <span>{task.taskName}</span>
                </div>
                <div className="task-description">
                    <span className="fw-bold">Description: </span>
                    <span>{task.description}</span>
                </div>
                <div className="task-status d-flex gap-2">
                    <span className="fw-bold">Status: </span>
                    <span>
                    <select class="form-select" aria-label="Status bar" onChange={handleStatus}>
                        <option value="Not Completed" selected>Not Completed</option>
                        <option value="Completed">Completed</option>
                    </select>
                    </span>
                </div>
            </div>

            <div className="card-footer d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-primary" onClick={editTask}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={removeTask}>Delete</button>
            </div>
        </div>
        </>
    )
}
