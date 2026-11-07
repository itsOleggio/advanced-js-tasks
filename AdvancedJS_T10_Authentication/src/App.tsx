import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages'
import './App.css'

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<div>404</div>}/>
      </Routes>
  )
}

export default App
