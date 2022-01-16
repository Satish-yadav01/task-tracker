import {useState} from 'react'
import './App.css';
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks,setTasks] = useState([
    // {
    //   id : 1,
    //   text : 'Doctor Appoinment',
    //   day : 'Feb 5th at 2:30pm',
    //   reminder : true
    // },
    // {
    //   id : 2,
    //   text : 'Meeting at School',
    //   day : 'Feb 6th at 10:00am',
    //   reminder : true
    // },
    // {
    //   id : 3,
    //   text : 'Food Shoping',
    //   day : 'Feb 5th at 2:30pm',
    //   reminder : false
    // },
  ])

  // onDelete
  const onDelete = (id)=>{
    setTasks(tasks.filter((task)=>{ return task.id !== id}))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>{
      return task.id === id ? {...task, reminder : !task.reminder} : task
    }))
  }

  // AddTask
  const addTask = (task) =>{
   const id = Math.floor(Math.random() * 10000) + 1
  //  console.log(id)
   const newTask = {id, ...task}
   setTasks([...tasks,newTask])

  }

  return (
    <div className="container">
      <Header title="Task tracker" showAdd = {showAddTask} showAddTask = {()=>setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask addTask = {addTask}/> }
      <br />
      {tasks.length > 0 ?
      <Tasks tasks = {tasks} onDelete = {onDelete} onToggle = {toggleReminder}/>
      : "No Task To show "}
    </div>
  );
}





export default App;
