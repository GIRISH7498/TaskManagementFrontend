import React, { useEffect } from 'react'
import { useState } from 'react'
import { createTask, getTask, updateTask } from '../services/TaskService'
import { useNavigate, useParams } from 'react-router-dom'

export const TasksComponent = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [completed, setCompleted] = useState()
    const navigate = useNavigate()
    const {id} = useParams()

    function saveTaskOrUpdateTask(e) {
        e.preventDefault();
        const task = { title, description, dueDate, completed };
        console.log('Submitting task:', task);

        if(id){
            updateTask(id, task).then((response) => {
                console.log('Task updated:', response.data);
                navigate('/tasks');
            }).catch(error =>{
                console.error('Error updating task:', error);
            })
        }
        else{
            createTask(task)
            .then((response) => {
                console.log('Task created:', response.data);
                navigate('/tasks');
            })
            .catch(error => {
                console.error('Error creating task:', error);
            });
        } 
    }
    
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Task</h2>
        }
        else{
            return <h2 className='text-center'>Add Task</h2>
        }
    }

    useEffect( () => {
        if(id){
            getTask(id).then((response) => {
                console.log(response.data);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setDueDate(response.data.dueDate);
                setCompleted(response.data.completed)
            }).catch(error => {
                console.error('Error fetching task to update:', error);
            })
        }
    }, [id])

  return (
    <div className='container'>
        <br></br>
        <br></br>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                { pageTitle() }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'><b>Task Title:</b></label>
                            <input type='text' className='form-control' placeholder='Enter task title' name='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'><b>Task Description:</b></label>
                            <input type='text' className='form-control' placeholder='Enter task description' name='description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'><b>Task Due Date:</b></label>
                            <input type='date' className='form-control' placeholder='Enter task due date' name='dueDate' value={dueDate} onChange={(e) => setDueDate(e.target.value)}></input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'><b>Task Completed:</b></label>
                            <select className='form-control' value={completed} onChange={(e) => setCompleted(e.target.value)}>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </div>
                        <button className='btn btn-success' onClick={ (e) => saveTaskOrUpdateTask(e) }>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TasksComponent
