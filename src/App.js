import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'FPP',
        day: 'Feb 5th at 2',
        remider: true,
      },
      {
        id: 2,
        text: 'MPP',
        day: 'Feb 5th at 2222',
        remider: true,
      },
      {
        id: 3,
        text: 'SA',
        day: 'Feb 5th at 222255',
        remider: true,
      },
      {
        id: 4,
        text: 'SE',
        day: 'Feb 5th at 222255',
        remider: true,
      },
      {
        id: 5,
        text: 'WAP',
        day: 'Feb 5th at 222255',
        remider: true,
      }

    ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleRemider = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, remider: !task.remider } : task))
  }
  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemider} />) : (
        'No tasks to Show'
      )
      }
    </div>
  );
}

export default App;
