import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
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
  // const name = 'Chris'
  // const x = true
  return (
    <div className="container">
      <Header title='Hello Prop' />
      <Tasks tasks={tasks}/>

      {/* <h2>Hello {name}</h2>
      <h2>{x ?  'Yes' : 'No'}</h2> */}
    </div>
  );
}

export default App;
