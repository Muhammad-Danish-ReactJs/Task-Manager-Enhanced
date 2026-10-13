import usestate from "react";

function AddTaskForm() {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form className="my-3 d-flex gap-2" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className="btn btn-primary">Add Task</button>
      </form>
    </div>
  );
}

export default AddTaskForm;
