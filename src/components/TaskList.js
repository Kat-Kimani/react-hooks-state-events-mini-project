import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <task key={index} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
