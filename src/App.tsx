import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Main from "./Main"
import ScrollToTop from './components/ScrollToTop'
import Construction from "./Construction"
import RLSimplexSolver from "./RLSimplexSolver"
import DuckHunt from "./DuckHunt"
import Doom from "./Doom"
import TradingBot from "./TradingBot"



function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/under-construction" element={<Construction />} /> 
          <Route path="/rl-simplex-solver" element={<RLSimplexSolver />} />
          <Route path="/duck-hunt" element={<DuckHunt />} />
          <Route path="/doom-rl-agent" element={<Doom />} />
          <Route path="/automated-trading-bot" element={<TradingBot />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
