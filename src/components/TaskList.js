import { useTasks } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, toggleTask, deleteTask, filter, setFilter } = useTasks();

  const filteredTasks = tasks.filter(t => 
    filter === 'all' ? true : filter === 'completed' ? t.completed : !t.completed
  );

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
