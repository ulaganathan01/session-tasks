export default function StatusFilter({}){
    return(
        <div className="row gx-1">
            <div className="col-1 fw-bold">
                <label htmlFor="filter">Status Filter : </label>
            </div>
            <div className="col-2">
                <select className="form-select" aria-label="Status filter">
                    <option selected>All</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                </select>
            </div>
        </div>
    )
}