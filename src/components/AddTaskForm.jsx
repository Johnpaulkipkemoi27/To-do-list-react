import React from 'react'

const AddTaskForm = () => {
  return (
    <div className="add-task-container">
    <form id="add-task-form" onSubmit={() => alert("The form has been clicked")}>
        <input
            type="text"
            id="task-input"
            placeholder="Add a new task..."
            required
        />
        <button type="submit" id="add-task-btn">
            <i className="fas fa-plus"></i>
        </button>
    </form>
</div>
  );
};

export default AddTaskForm
