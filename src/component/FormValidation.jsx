
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






// function App() {
//     let [task, setTask] = useState("")
//     let [taskArray, setTaskArray] = useState([])
//     let [editIndex, setEditIndex] = useState(null)
//     // State to keep track of the index of the task being edited
//     const getDataInput = (event) => {
//         {/* Update the task state with the input value */ }
//         setTask(event.target.value)
//     }
//     const addTaskInArray = () => {
//         if (editIndex !== null) {
//             // If in edit mode, update the task at the specified index
//             const updatedTasks = taskArray.map((item, index) =>
//                 index === editIndex ? task : item
//             );
//             setTaskArray(updatedTasks);
//             setEditIndex(null); // Reset edit index
//         } else {
//             // Otherwise, add the new task
//             setTaskArray([...taskArray, task]);
//         }
//         setTask(""); // Clear the input field
//     }
//     {/*Function to remove a task from the taskArray*/ }
//     const removeHandle = (index) => {
//         const filterData = taskArray.filter((e, i) => i !== index)
//         setTaskArray(filterData)
//     } // Function to edit a task
//     const editHandle = (index) => {
//         setTask(taskArray[index]); // Set the current task to the value at the specified index
//         setEditIndex(index); // Set the edit index to the specified index
//     }
//     return (
//         <>
//             <div className='mainDiv'>
//                 <h2>{task}</h2>
//                 <input value={task} placeholder='Enter any thing here' onChange={(e) => getDataInput(e)} />
//                 <button onClick={() => addTaskInArray()}>Submit Task</button>
//                 {
//                     taskArray.map((e, i) => {
//                         {/*Applied the key attribute to the div element within the map function*/ }
//                         return <div key={i} style={{ display: "flex", height: "26px", padding: "0 3px", margin: "20px" }}> <h3 > {e} </h3>
//                             {/* Button to edit the task */}
//                             <button onClick={() => editHandle(i)}> Edit </button>
//                             <button onClick={() => removeHandle(i)}> Dlt </button>
//                         </div>
//                     })}
//             </div>
//         </>)
// }
// export default App










import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useState } from "react"


function FormValidation() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const [submitedData, setSubmitedData] = useState(null)

    const validatedForm = () => {
        let isValid = true
        const newErrors = {}

        if (!name.trim()) {
            newErrors.name = "name is required "
            isValid = false
        }

        if (!email.trim()) {
            newErrors.email = "email is required "
            isValid = false
        } else if (! /\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "email is required "
            isValid = false
        }
        if (!password.trim()) {
            newErrors.password = "password is required "
            isValid = false
        } else if (password.length < 6) {
            newErrors.password = "At least 6 digit must be"
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validatedForm()) {
            const submitedData = {
                name,
                email,
                password
            }
            setSubmitedData(submitedData);
            console.log("submited data..", submitedData)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Name :</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <span className="error"> {errors.name} </span>}
                </div>

                <div>
                    <label >Email :</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <span className="error">{errors.email} </span>}

                </div>

                <div>
                    <label>Password :</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <span className="error"> {errors.password} </span>}
                </div>

                <button type="submit"> Submit</button>
            </form>

            {submitedData && (<div>
                <h2> Submit data  </h2>
                <p> Name {submitedData.name} </p>
                <p> Email {submitedData.email} </p>
                <p> Password {submitedData.password} </p>
            </div>
            )}
        </>
    )
}

export default FormValidation 