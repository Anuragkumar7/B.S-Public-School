import "./App.css";
import Contact_Us_form from "./Components/Contact_Us_form";
import Main from "./Components/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    
      <div>
     <Router>
<Routes>
  <Route path="/" element={<Main />} />
  <Route path="/contact" element={<Contact_Us_form />} />

</Routes>

     </Router>
      </div>
    </>
  );
}

export default App;
