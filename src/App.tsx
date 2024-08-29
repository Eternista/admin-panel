import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/app.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="page d-flex flex-wrap">
        <Header />
        <Sidebar />
        <Dashboard>
          <h1>Heading 1</h1>
          <p>Context 1</p>
        </Dashboard>
      </div>
    </Router>
  )
}

export default App
