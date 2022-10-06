import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Get haircut',
        day: 'Feb 6th at 3:30pm',
        reminder: true, 
    },
    {
        id: 3,
        text: 'Study',
        day: 'Feb 7th at 4:30pm',
        reminder: false, 
    }
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
 const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
 }

 // Toggle Reminder
 const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? {...task, reminder: !task.reminder} : task)) 
 }
  // const name = 'Chris'
  // const x = true
  return (
    <div className="container">
      <Header title='Hello Prop' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}

      {/* <h2>Hello {name}</h2>
      <h2>{x ?  'Yes' : 'No'}</h2> */}
    </div>
  );
}

export default App;
