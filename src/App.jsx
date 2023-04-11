import react from 'react'
import {
  BrowserRouter as Router
  , Routes
  , Route
} from 'react-router-dom'
import Home from './pages/home/home.jsx'
import './App.css'

function App () {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route index element={ <Home/>} />
            <Route path="about" element={<h1>about</h1>} />
            <Route path="dashboard" element={<h1>dashboard</h1>} />

            <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<h1>jome</h1>}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
