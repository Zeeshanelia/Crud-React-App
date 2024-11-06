
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleTaskSubmit = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks

    if (editIndex !== null) {
      const updatedTasks = taskArray.map((item, index) =>
        index === editIndex ? task : item
      );
      setTaskArray(updatedTasks);
      setEditIndex(null); // Reset edit index
    } else {
      setTaskArray([...taskArray, task]);
    }
    
    setTask(""); // Clear the input field
  };

  const handleTaskRemove = (index) => {
    const filteredTasks = taskArray.filter((_, i) => i !== index);
    setTaskArray(filteredTasks);
  };

  const handleTaskEdit = (index) => {
    setTask(taskArray[index]); // Set the current task to the value at the specified index
    setEditIndex(index); // Set the edit index to the specified index
  };

  return (
    <div className='mainDiv'>
      <h2>{editIndex !== null ? "Editing Task" : "Add New Task"}</h2>
      <input
        value={task}
        placeholder='Enter your task here'
        onChange={handleInputChange}
      />
      <button onClick={handleTaskSubmit}>Submit Task</button>
      <div>
        {taskArray.map((e, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
            <h3>{e}</h3>
            <button onClick={() => handleTaskEdit(i)}>Edit</button>
            <button onClick={() => handleTaskRemove(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;



















// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";

// function App() {
//   const [task, setTask] = useState("");
//   const [taskArray, setTaskArray] = useState([]);

//   const addTaskArray = () => {
//     if (task.trim() !== "") {
//       setTaskArray([...taskArray, task]);
//       setTask('');
//     }
//   };

//   const getTaskInput = (e) => {
//     setTask(e.target.value);
//   };

//   const removeHandler = (index) => {
//     const filterData = taskArray.filter((_, i) => i !== index);
//     setTaskArray(filterData);
//   };

//   return (
//     <div className='mainDiv'>
//       <div className='input' style={{ display: 'flex' }}>
//         <input
//           type="text"
//           placeholder="TaskApp"
//           value={task}
//           onChange={getTaskInput}
//         />
//         <button onClick={addTaskArray}>Add</button>
//       </div>
//       <div style={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
//         {taskArray.map((e, i) => (
//           <div key={i}>
//             <hr />
//             <h3>{e}</h3>
//             <button onClick={() => removeHandler(i)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
















// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { useState } from 'react'


// function App() {
//   let [task, setTask] = useState("")
//   let [taskArray, setTaskArray] = useState([])
//   let [editIndex, setEditIndex] = useState(null)
//   // State to keep track of the index of the task being edited
//   const getDataInput = (event) => {
//     {/* Update the task state with the input value */ }
//     setTask(event.target.value)
//   }
//   const addTaskInArray = () => {
//     if (editIndex !== null) {
//       // If in edit mode, update the task at the specified index
//       const updatedTasks = taskArray.map((item, index) =>
//         index === editIndex ? task : item
//       );
//       setTaskArray(updatedTasks);
//       setEditIndex(null); // Reset edit index
//     } else {
//       // Otherwise, add the new task
//       setTaskArray([...taskArray, task]);
//     }
//     setTask(""); // Clear the input field
//   }
//   {/*Function to remove a task from the taskArray*/ }
//   const removeHandle = (index) => {

//     const filterData = taskArray.filter((e, i) => i !== index)
//     setTaskArray(filterData)
//   }

//   // Function to edit a task
//   const editHandle = (index) => {
//     setTask(taskArray[index]); // Set the current task to the value at the specified index
//     setEditIndex(index); // Set the edit index to the specified index
//   }
//   return (
//     <>
//       <div className='mainDiv'>
//         <h2>{task}</h2>
//         <input value={task} placeholder='Enter any thing here' onChange={(e) => getDataInput(e)} />
//         <button onClick={() => addTaskInArray()}>Submit Task</button>
//         {
//           taskArray.map((e, i) => {
//             {/*Applied the key attribute to the div element within the map function*/ }
//             return <div key={i} style={{ display: "flex", height: "26px", padding: "0 3px", margin: "20px" }}> <h3 > {e} </h3>
//               {/* Button to edit the task */}
//               <button onClick={() => editHandle(i)}> Edit </button>
//               <button onClick={() => removeHandle(i)}> Dlt </button>
//             </div>
//           })}
//       </div>
//     </>)
// }
// export default App










