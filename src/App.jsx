import "./App.css";
import Contact_Us_form from "./Components/Contact_Us_form";
import Main from "./Components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admission from "./Components/Admission";
import About_School from "./Components/About_School";
import Faculty from "./Components/Faculty";
import Achievements from "./Components/Achievements";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact_Us_form />} />
            <Route path="/Admission" element={<Admission/>}/>
            <Route path="/About_School" element={<About_School/>}/>
            <Route path="/Faculty" element={<Faculty/>}/>
            <Route path="/Achievements" element={<Achievements/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
