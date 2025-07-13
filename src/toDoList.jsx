import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [Newtask, setNewTask] = useState("");

     function handleInputChange(e) {
        setNewTask(e.target.value); 
    }

    function handleAddTask() {
        if (Newtask.trim() !== "") {
            setTasks(t=>[...t, Newtask]);
            setNewTask(""); // Clear the input field after adding the task
        } else {
            alert("Please enter a task.");
        }
    }

    function removeTask(index) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    function moveTaskUp(index) {
        if( index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if( index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    
    }

   
    return (
       <div className="to-do-list">
        <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter your task' value={Newtask} onChange={handleInputChange}></input>
                <button className="add-button" onClick={handleAddTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => removeTask(index)}>x</button>
                        {
                        index!==0 ? <button className="move-up-button" onClick={() => moveTaskUp(index)}>⬆</button>: null
                        /* {index !== 0 && (
                                <button className="move-up-button" onClick={() => moveTaskUp(index)}>⬆</button>
                            )} */}
                            {
                        index!==tasks.length-1 ? <button className="move-down-button" onClick={() => moveTaskDown(index)}>⬇</button>:null
                            }
                    </li>
                ))}
            </ol>
       </div>
    );
}

export default ToDoList;