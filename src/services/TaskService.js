import axios from "axios";

const BASE_REST_API_URL = 'http://localhost:8080/api/tasks';

// export function getAllTasks(){
//     return axios.get(BASE_REST_API_URL);
// }

export const getAllTasks = () => axios.get(BASE_REST_API_URL)

export const createTask = (task) => axios.post(BASE_REST_API_URL, task)

export const getTask = (id) => axios.get(BASE_REST_API_URL + '/' + id)

export const updateTask = (id, task) => axios.put(BASE_REST_API_URL + '/' + id, task)

export const deleteTask = (id) => axios.delete(BASE_REST_API_URL + '/' + id)

export const completeTask = (id) => axios.patch(BASE_REST_API_URL + '/' + id + '/complete')

export const inCompleteTask = (id) => axios.patch(BASE_REST_API_URL + '/' + id + '/in-complete')
