import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./Pages/Work/Work";
import Info from "./Pages/Info/Info";
import Loading from "./Pages/Loading/Loading";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Work" element={<Work />} />
          <Route path="/" element={<Loading />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
