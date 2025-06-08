import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Events from './assets/pages/Events'
import EventDetails from './assets/pages/EventDetails'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Navigate to="/events" />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
    </Routes>
  )
}

export default App
