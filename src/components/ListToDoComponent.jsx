import React, { useEffect, useState } from 'react'
import { getAllTasks, deleteTask, completeTask, inCompleteTask } from '../services/TaskService'
import { useNavigate } from 'react-router-dom'

const ListToDoComponent = () => {

    const [todos, setTasks] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        listTasks();
    }, [])

    function listTasks(){
        getAllTasks().then((response) => {
            setTasks(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    function addNewTask(){
        navigate('/add-new-task')
    }

    function updateTask(id){
        console.log(id);
        navigate(`/update-task/${id}`)
    }

    function removeTask(id){
        deleteTask(id).then((response) => {
            listTasks();
        }).catch(error => {
            console.error(error);
        })
    }

    function markCompleteTask(id){
        completeTask(id).then((response) => {
            listTasks();
        }).catch(error => {
            console.error(error);
        })
    }

    function markInCompleteTask(id){
        inCompleteTask(id).then((response) => {
            listTasks();
        }).catch(error => {
            console.error(error);
        })
    }
    
  return (
    <div className='container'>
        <h2 className='text-center'>List of Tasks</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTask}>Add New Task</button>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Task Title</th>
                        <th>Task Description</th>
                        <th>Task Due Date</th>
                        <th>Task Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => 
                            <tr key={todo.id}>

                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.dueDate}</td>
                                <td>{todo.completed ? "Yes" : "No"}</td>  
                                <td>
                                    <button className='btn btn-info' onClick={() => updateTask(todo.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeTask(todo.id)} style={{ marginLeft: "10px" }}>Delete</button>
                                    <button className='btn btn-success' onClick={() => markCompleteTask(todo.id)} style={{ marginLeft: "10px" }}>Complete</button>
                                    <button className='btn btn-info' onClick={() => markInCompleteTask(todo.id)} style={{ marginLeft: "10px" }}>In Complete</button>
                                </td> 
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListToDoComponent