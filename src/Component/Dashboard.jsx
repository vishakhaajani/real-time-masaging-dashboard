import React, { useState } from 'react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState(''); 
  const [filterPriority, setFilterPriority] = useState('Medium');
  const [filterDueDate, setFilterDueDate] = useState(''); 

  const addTask = () => {
    if (input && dueDate) {
      const newTask = {
        id: Date.now(), 
        text: input,
        priority,
        dueDate,
        status: 'Pending',
      };
      setTasks([...tasks, newTask]);
      setInput('');
      setDueDate('');
      setPriority('Medium');
    }
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // Filter tasks based on priority and due date
  const filteredTasks = tasks.filter((task) => {
    const statusMatch = filterPriority === 'Medium' || task.priority === filterPriority;
    const dateMatch = !filterDueDate || task.dueDate === filterDueDate;
    return statusMatch && dateMatch;
  });

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Real-Time Messaging Dashboard</h1>

      {/* Filter Section */}
      <div className="flex justify-between mb-4">
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)} 
          className="border p-2 rounded-lg"
        >
          <option value="Medium">Medium</option> 
          <option value="High">High</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="date"
          value={filterDueDate}
          onChange={(e) => setFilterDueDate(e.target.value)}
          className="border p-2 rounded-lg"
        />
      </div>

      <div className="border rounded-lg p-4 mb-4 bg-white shadow-md h-3/4 overflow-y-auto">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks match the filter.</p>
        ) : (
          filteredTasks.map((task) => (
            <div key={task.id} className="flex justify-between items-center border-b py-2">
              <div className="flex-1">
                <div className={`flex items-center ${task.status === 'Completed' ? ' bg-indigo-100' : ' bg-indigo-100'} rounded-lg p-2 mb-2`}>
                  <div className="flex-1">
                    <p className={`text-gray-800 ${task.status === 'Completed' ? 'line-through text-gray-500' : ''}`}>
                      {task.text} - <span className="font-semibold">{task.priority}</span> - Due: {task.dueDate}
                    </p>
                    <p className="text-sm text-gray-500">Status: {task.status}</p>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded-l-lg p-2 flex-1"
          placeholder="Task description..."
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 mx-2 rounded-lg"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <button onClick={addTask} className=" bg-indigo-500 text-white rounded-r-lg p-2 hover:bg-indigo-600">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
