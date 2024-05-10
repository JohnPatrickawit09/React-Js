import { useState } from 'react'
import './App.css'
import Message from './src/assets/Message'
import MessageClass from './src/assets/MessageClass'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './src/assets/Header'
import Footer from './src/assets/Footer'
import Content from './src/assets/Content'
import Sidebar from './src/assets/Sidebar'
import Dashboard from './src/assets/Dashboard'
import Students from './src/assets/Students'
import Admin from './src/assets/Admin'
import TestComponents from './src/assets/TestComponents';

function App() {
  const [count, setCount] = useState(0)

  return (
       
      <Router>
        <div className="flex flex-col h-screen w-screen">
              <Header />
                <div className="flex flex-1">
                  <Sidebar />
                    <Routes>
                      <Route exact path="/dashboard" element={<Dashboard />} />
                      <Route exact path="/admin" element={<Admin />} />
                      <Route exact path="/students" element={<Students/>} />
                    </Routes>
                </div>
              <Footer />
          </div>
       </Router>
  )
}

export default App