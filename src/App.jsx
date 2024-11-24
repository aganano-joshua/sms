import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import AdminDashboard from './pages/AdminDashboard'
import ManageEmployees from "./pages/ManageEmployees"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/manage" element={<ManageEmployees />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App