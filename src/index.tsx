import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./App"
import ScrollToTop from './components/ScrollToTop'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)