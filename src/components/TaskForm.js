import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return alert('Task cannot be empty');
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Add task..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
