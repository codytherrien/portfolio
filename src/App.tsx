import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Main from "./Main"
import Construction from "./Construction"


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/underConstruction" element={<Construction />} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
