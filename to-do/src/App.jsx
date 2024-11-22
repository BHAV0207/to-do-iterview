import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [searchTAsk, setsearchTAsk] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = { id: Date.now(), text: newTask };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTAsk.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">To-Do List</h1>

      <input
        type="text"
        placeholder="Search tasks"
        value={searchTAsk}
        onChange={(e) => setsearchTAsk(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTask}
          className="px-6 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>

      <ul className="list-none space-y-4">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100"
          >
            <span className="text-gray-800">{task.text}</span>
            <button
              onClick={() => handleRemoveTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
