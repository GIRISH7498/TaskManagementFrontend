import './App.css'
import ListToDoComponent from './components/ListToDoComponent'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TasksComponent } from './components/TasksComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path="/" element={<ListToDoComponent></ListToDoComponent>}></Route>
        <Route path="/tasks" element={<ListToDoComponent></ListToDoComponent>}></Route>
        <Route path="/add-new-task" element={<TasksComponent></TasksComponent>}></Route>
        <Route path="/update-task/:id" element={<TasksComponent></TasksComponent>}></Route>
      </Routes>
      <FooterComponent></FooterComponent>
    </BrowserRouter>
    </>
  )
}

export default App
